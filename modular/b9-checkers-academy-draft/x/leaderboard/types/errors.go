package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/leaderboard module sentinel errors
var (
	ErrSample               = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidPacketTimeout = sdkerrors.Register(ModuleName, 1500, "invalid packet timeout")
	ErrInvalidVersion       = sdkerrors.Register(ModuleName, 1501, "invalid version")
	ErrInvalidDateAdded     = sdkerrors.Register(ModuleName, 1120, "dateAdded cannot be parsed: %s")
	ErrBoardNotFound        = sdkerrors.Register(ModuleName, 1502, "board not found")
	ErrCandidateNotFound    = sdkerrors.Register(ModuleName, 1503, "candidate not found")
)
