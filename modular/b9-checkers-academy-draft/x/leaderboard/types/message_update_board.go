package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateBoard = "update_board"

var _ sdk.Msg = &MsgUpdateBoard{}

func NewMsgUpdateBoard(creator string) *MsgUpdateBoard {
	return &MsgUpdateBoard{
		Creator: creator,
	}
}

func (msg *MsgUpdateBoard) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBoard) Type() string {
	return TypeMsgUpdateBoard
}

func (msg *MsgUpdateBoard) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBoard) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBoard) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
