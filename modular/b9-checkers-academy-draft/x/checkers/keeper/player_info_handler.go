package keeper

import (
	"fmt"

	rules "github.com/b9lab/checkers/x/checkers/rules"
	"github.com/b9lab/checkers/x/checkers/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func getWinnerAndLoserAddresses(storedGame *types.StoredGame) (winnerAddress sdk.AccAddress, loserAddress sdk.AccAddress) {
	if storedGame.Winner == rules.PieceStrings[rules.NO_PLAYER] {
		panic(types.ErrThereIsNoWinner.Error())
	}
	redAddress, err := storedGame.GetRedAddress()
	if err != nil {
		panic(err.Error())
	}
	blackAddress, err := storedGame.GetBlackAddress()
	if err != nil {
		panic(err.Error())
	}
	if storedGame.Winner == rules.PieceStrings[rules.RED_PLAYER] {
		winnerAddress = redAddress
		loserAddress = blackAddress
	} else if storedGame.Winner == rules.PieceStrings[rules.BLACK_PLAYER] {
		winnerAddress = blackAddress
		loserAddress = redAddress
	} else {
		panic(fmt.Sprintf(types.ErrWinnerNotParseable.Error(), storedGame.Winner))
	}
	return winnerAddress, loserAddress
}

func (k *Keeper) MustRegisterPlayerWin(ctx sdk.Context, storedGame *types.StoredGame) {
	winnerAddress, loserAddress := getWinnerAndLoserAddresses(storedGame)
	k.board.MustAddWonGameResultToPlayer(ctx, winnerAddress)
	k.board.MustAddLostGameResultToPlayer(ctx, loserAddress)
}

func (k *Keeper) MustRegisterPlayerForfeit(ctx sdk.Context, storedGame *types.StoredGame) {
	winnerAddress, loserAddress := getWinnerAndLoserAddresses(storedGame)
	k.board.MustAddWonGameResultToPlayer(ctx, winnerAddress)
	k.board.MustAddForfeitedGameResultToPlayer(ctx, loserAddress)
}
