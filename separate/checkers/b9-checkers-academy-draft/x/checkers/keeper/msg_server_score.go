package keeper

import (
	"context"

	"github.com/b9lab/checkers/x/checkers/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
)

func (k msgServer) SendScore(goCtx context.Context, msg *types.MsgSendScore) (*types.MsgSendScoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	leaderboard, found := k.GetLeaderboard(ctx)

	if !found {
		panic("Leaderboard not found")
	}

	// Construct the packet
	var packet types.ScorePacketData

	found_in_leaderboard := false
	for i := range leaderboard.Winners {
	    if leaderboard.Winners[i].PlayerAddress == msg.Sender {
	        // found the player, send stats
        	packet.PlayerAddress = leaderboard.Winners[i].PlayerAddress
					packet.WonCount = leaderboard.Winners[i].WonCount
					packet.DateAdded = leaderboard.Winners[i].DateAdded
					packet.GameID = msg.ChannelID
	        found_in_leaderboard = true
	        break
	    }
	}

	if !found_in_leaderboard {
		panic("Player not found in the leaderboard")
	}

	// Transmit the packet
	err := k.TransmitScorePacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendScoreResponse{}, nil
}
