package simulation

import (
	"math/rand"

	"github.com/b9lab/checkers/x/leaderboard/keeper"
	"github.com/b9lab/checkers/x/leaderboard/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgUpdateBoard(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgUpdateBoard{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the UpdateBoard simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "UpdateBoard simulation not implemented"), nil, nil
	}
}
