package keeper

import (
	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
)

var _ types.QueryServer = Keeper{}
