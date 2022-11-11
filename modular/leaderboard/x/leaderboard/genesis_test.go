package leaderboard_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "leaderboard/testutil/keeper"
	"leaderboard/testutil/nullify"
	"leaderboard/x/leaderboard"
	"leaderboard/x/leaderboard/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		PlayerInfoList: []types.PlayerInfo{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		Board: &types.Board{
			PlayerInfo: new(types.PlayerInfo),
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LeaderboardKeeper(t)
	leaderboard.InitGenesis(ctx, *k, genesisState)
	got := leaderboard.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.PlayerInfoList, got.PlayerInfoList)
	require.Equal(t, genesisState.Board, got.Board)
	// this line is used by starport scaffolding # genesis/test/assert
}
