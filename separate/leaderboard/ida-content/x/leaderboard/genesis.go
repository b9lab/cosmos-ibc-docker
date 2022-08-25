package leaderboard

import (
	"github.com/cosmonaut/leaderboard/x/leaderboard/keeper"
	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the board
	for _, elem := range genState.BoardList {
		k.SetBoard(ctx, *elem)
	}

	// Set all the playerInfo
	for _, elem := range genState.PlayerInfoList {
		k.SetPlayerInfo(ctx, *elem)
	}

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all board
	boardList := k.GetAllBoard(ctx)
	for _, elem := range boardList {
		elem := elem
		genesis.BoardList = append(genesis.BoardList, &elem)
	}

	// Get all playerInfo
	playerInfoList := k.GetAllPlayerInfo(ctx)
	for _, elem := range playerInfoList {
		elem := elem
		genesis.PlayerInfoList = append(genesis.PlayerInfoList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
