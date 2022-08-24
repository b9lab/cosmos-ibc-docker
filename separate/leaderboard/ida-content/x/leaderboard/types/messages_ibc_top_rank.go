package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendIbcTopRank = "send_ibc_top_rank"

var _ sdk.Msg = &MsgSendIbcTopRank{}

func NewMsgSendIbcTopRank(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	playerId string,
	rank uint64,
	score string,
) *MsgSendIbcTopRank {
	return &MsgSendIbcTopRank{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		PlayerId:         playerId,
		Rank:             rank,
		Score:            score,
	}
}

func (msg *MsgSendIbcTopRank) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcTopRank) Type() string {
	return TypeMsgSendIbcTopRank
}

func (msg *MsgSendIbcTopRank) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendIbcTopRank) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcTopRank) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
