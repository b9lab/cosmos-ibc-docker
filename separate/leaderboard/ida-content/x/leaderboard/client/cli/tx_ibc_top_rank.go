package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/client/utils"
)

var _ = strconv.Itoa(0)

func CmdSendIbcTopRank() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-ibc-top-rank [src-port] [src-channel] [playerId] [score] [dateAdded] [gameId]",
		Short: "Send a ibcTopRank over IBC",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPlayerId := string(args[2])
			argsScore, _ := strconv.ParseUint(args[3], 10, 64)
			argsDateAdded := string(args[4])
			argsGameId := string(args[5])

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

			msg := types.NewMsgSendIbcTopRank(sender, srcPort, srcChannel, timeoutTimestamp, string(argsPlayerId), uint64(argsScore), string(argsDateAdded), string(argsGameId))
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
