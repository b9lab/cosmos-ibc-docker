package keeper

import (
	"context"
	"errors"

	"github.com/b9lab/checkers/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
)

func (k msgServer) SendCandidate(goCtx context.Context, msg *types.MsgSendCandidate) (*types.MsgSendCandidateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// get the Player data
	PlayerInfo, PlayerFound := k.GetPlayerInfo(ctx, msg.Creator)

	if !PlayerFound {
		return nil, errors.New("Player not found")
	}

	// Construct the packet
	var packet types.CandidatePacketData
	packet.PlayerInfo = &PlayerInfo

	// Transmit the packet
	err := k.TransmitCandidatePacket(
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

	return &types.MsgSendCandidateResponse{}, nil
}
