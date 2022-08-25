package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcTopRank{}

func NewMsgSendIbcTopRank(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	playerId string,
	score uint64,
	dateAdded string,
	gameId string,
) *MsgSendIbcTopRank {
	return &MsgSendIbcTopRank{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		PlayerId:         playerId,
		Score:            score,
		DateAdded:        dateAdded,
		GameId:           gameId,
	}
}

func (msg *MsgSendIbcTopRank) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcTopRank) Type() string {
	return "SendIbcTopRank"
}

func (msg *MsgSendIbcTopRank) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcTopRank) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcTopRank) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
