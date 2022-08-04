package cli

import (
	"github.com/spf13/cobra"
	"strconv"
	"context"

	"github.com/b9lab/checkers/x/checkers/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/client/utils"
)

var _ = strconv.Itoa(0)

func CmdSendScore() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-score [src-port] [src-channel]",
		Short: "Send a score over IBC",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPlayerAddress := ""
			argsWonCount := uint64(0)
			argsDateAdded := ""

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			sender := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetLeaderboardRequest{}

			leaderboard, err := queryClient.Leaderboard(context.Background(), params)
			if err != nil {
				return err
			}

			for _, winningPlayer := range leaderboard.Leaderboard.Winners {
				if winningPlayer.PlayerAddress == sender {
					argsPlayerAddress = winningPlayer.PlayerAddress
					argsWonCount = winningPlayer.WonCount
					argsDateAdded = winningPlayer.DateAdded
				}
			}

			msg := types.NewMsgSendScore(sender, srcPort, srcChannel, timeoutTimestamp, string(argsPlayerAddress), uint64(argsWonCount), string(argsDateAdded))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
