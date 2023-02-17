package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/b9lab/checkers/testutil/keeper"
	"github.com/b9lab/checkers/x/leaderboard"
	"github.com/b9lab/checkers/x/leaderboard/keeper"
	"github.com/b9lab/checkers/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

const (
	alice = "cosmos1jmjfq0tplp9tmx4v9uemw72y4d2wa5nr3xn9d3"
	bob   = "cosmos1xyxs3skf3f4jfqeuv89yyaqvjc6lffavxqhc8g"
	carol = "cosmos1e0w5t53nrq7p66fye6c8p0ynyhf6y24l4yuxd7"
)

func setupMsgServerForUpdateBoard(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.LeaderboardKeeper(t)
	genesis := *types.DefaultGenesis()
	genesis.PlayerInfoList = append(genesis.PlayerInfoList, types.PlayerInfo{
		Index:          alice,
		WonCount:       2,
		LostCount:      1,
		ForfeitedCount: 0,
		DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
	}, types.PlayerInfo{
		Index:          bob,
		WonCount:       3,
		LostCount:      0,
		ForfeitedCount: 1,
		DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
	})
	leaderboard.InitGenesis(ctx, *k, genesis)
	server := keeper.NewMsgServerImpl(*k)
	context := sdk.WrapSDKContext(ctx)
	return server, *k, context
}

func TestUpdateBoardCarolAbsent(t *testing.T) {
	msgServer, _, context := setupMsgServerForUpdateBoard(t)
	_, err := msgServer.UpdateBoard(context, &types.MsgUpdateBoard{
		Creator: carol,
	})
	require.Equal(t, "candidate not found", err.Error())
}

func TestUpdateBoardAliceOnly(t *testing.T) {
	msgServer, keeper, context := setupMsgServerForUpdateBoard(t)
	ctx := sdk.UnwrapSDKContext(context)
	_, err := msgServer.UpdateBoard(context, &types.MsgUpdateBoard{
		Creator: alice,
	})
	require.Nil(t, err)
	board, found := keeper.GetBoard(ctx)
	require.True(t, found)
	require.Equal(t,
		[]types.PlayerInfo{
			{
				Index:          alice,
				WonCount:       2,
				LostCount:      1,
				ForfeitedCount: 0,
				DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
			},
		},
		board.PlayerInfo)
}

func TestUpdateBoardBobAfterAlice(t *testing.T) {
	msgServer, keeper, context := setupMsgServerForUpdateBoard(t)
	ctx := sdk.UnwrapSDKContext(context)
	board, found := keeper.GetBoard(ctx)
	require.True(t, found)
	board.PlayerInfo = []types.PlayerInfo{
		{
			Index:          alice,
			WonCount:       2,
			LostCount:      1,
			ForfeitedCount: 0,
			DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
		},
	}
	keeper.SetBoard(ctx, board)

	_, err := msgServer.UpdateBoard(context, &types.MsgUpdateBoard{
		Creator: bob,
	})

	require.Nil(t, err)
	board, found = keeper.GetBoard(ctx)
	require.True(t, found)
	require.Equal(t,
		[]types.PlayerInfo{
			{
				Index:          bob,
				WonCount:       3,
				LostCount:      0,
				ForfeitedCount: 1,
				DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
			},
			{
				Index:          alice,
				WonCount:       2,
				LostCount:      1,
				ForfeitedCount: 0,
				DateUpdated:    "2022-12-24 22:00:05.999999999 +0000 UTC",
			},
		},
		board.PlayerInfo)
}
