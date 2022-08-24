package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/tmsdkeys/leaderboard/testutil/keeper"
	"github.com/tmsdkeys/leaderboard/x/leaderboard/keeper"
	"github.com/tmsdkeys/leaderboard/x/leaderboard/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LeaderboardKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
