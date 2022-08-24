package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
	"github.com/tmsdkeys/leaderboard/x/leaderboard/types"
)

func (k msgServer) SendIbcTopRank(goCtx context.Context, msg *types.MsgSendIbcTopRank) (*types.MsgSendIbcTopRankResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcTopRankPacketData

	packet.PlayerId = msg.PlayerId
	packet.Rank = msg.Rank
	packet.Score = msg.Score

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
