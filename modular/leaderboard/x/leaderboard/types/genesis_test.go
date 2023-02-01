package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"leaderboard/x/leaderboard/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated playerInfo",
			genState: &types.GenesisState{
				PlayerInfoList: []types.PlayerInfo{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
