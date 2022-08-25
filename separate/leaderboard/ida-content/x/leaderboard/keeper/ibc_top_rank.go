package keeper

import (
	"errors"

	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
)

// TransmitIbcTopRankPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIbcTopRankPacket(
	ctx sdk.Context,
	packetData types.IbcTopRankPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.channelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvIbcTopRankPacket processes packet reception
func (k Keeper) OnRecvIbcTopRankPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTopRankPacketData) (packetAck types.IbcTopRankPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	score:= types.PlayerInfo {
		PlayerID: data.PlayerId,
		Score: data.Score,
		DateAdded: data.DateAdded,
	}

	leaderboard, found := k.GetBoard(ctx, data.GameId)
	
	if !found {
		board:= types.Board {
				Player:[]*types.PlayerInfo{&score},
				GameID: data.GameId,        
		}

		k.SetBoard(ctx, board)
	}

	found_in_leaderboard := false
	for i := range leaderboard.Player {
	    if leaderboard.Player[i].PlayerID == data.PlayerId {
	        // found the player, update the fields
	        leaderboard.Player[i].Score = data.Score
	        leaderboard.Player[i].DateAdded = data.DateAdded
	        found_in_leaderboard = true
	        break
	    }
	}

	// we cannot find the player in the leaderboard
	if(!found_in_leaderboard) {
		updated:= append(leaderboard.Player, &score)
	  leaderboard.Player = updated
	} 
		
	k.SetBoard(ctx, leaderboard)

	return packetAck, nil
}

// OnAcknowledgementIbcTopRankPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIbcTopRankPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTopRankPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.IbcTopRankPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutIbcTopRankPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIbcTopRankPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcTopRankPacketData) error {

	// TODO: packet timeout logic

	return nil
}
