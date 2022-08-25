package keeper

import (
	"context"

	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
)

func (k msgServer) SendIbcTopRank(goCtx context.Context, msg *types.MsgSendIbcTopRank) (*types.MsgSendIbcTopRankResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcTopRankPacketData

	packet.PlayerId = msg.PlayerId
	packet.Score = msg.Score
	packet.DateAdded = msg.DateAdded
	packet.GameId = msg.GameId

	// Transmit the packet
	err := k.TransmitIbcTopRankPacket(
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

	return &types.MsgSendIbcTopRankResponse{}, nil
}
