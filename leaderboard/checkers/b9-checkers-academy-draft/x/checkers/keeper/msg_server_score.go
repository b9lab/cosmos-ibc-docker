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

	// Construct the packet
	var packet types.ScorePacketData

	packet.PlayerAddress = msg.PlayerAddress
	packet.WonCount = msg.WonCount
	packet.DateAdded = msg.DateAdded

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
