package keeper

import (
	"github.com/tmsdkeys/leaderboard/x/leaderboard/types"
)

var _ types.QueryServer = Keeper{}
