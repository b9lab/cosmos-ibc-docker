package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendScore{}

func NewMsgSendScore(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	playerAddress string,
	wonCount uint64,
	DateAdded string,
) *MsgSendScore {
	return &MsgSendScore{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		PlayerAddress:     playerAddress,
		WonCount:         wonCount,
		DateAdded:        DateAdded,
	}
}

func (msg *MsgSendScore) Route() string {
	return RouterKey
}

func (msg *MsgSendScore) Type() string {
	return "SendScore"
}

func (msg *MsgSendScore) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendScore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendScore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
