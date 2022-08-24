package leaderboard_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/tmsdkeys/leaderboard/testutil/keeper"
	"github.com/tmsdkeys/leaderboard/testutil/nullify"
	"github.com/tmsdkeys/leaderboard/x/leaderboard"
	"github.com/tmsdkeys/leaderboard/x/leaderboard/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LeaderboardKeeper(t)
	leaderboard.InitGenesis(ctx, *k, genesisState)
	got := leaderboard.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
