package keeper

import (
	"leaderboard/x/leaderboard/types"
)

var _ types.QueryServer = Keeper{}
