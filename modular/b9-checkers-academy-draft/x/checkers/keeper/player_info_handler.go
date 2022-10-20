package keeper

import (
	"fmt"

	rules "github.com/b9lab/checkers/x/checkers/rules"
	"github.com/b9lab/checkers/x/checkers/types"

	leaderboard "github.com/b9lab/checkers/x/leaderboard/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func mustAddDeltaGameResultToPlayer(
	k *Keeper,
	ctx sdk.Context,
	player sdk.AccAddress,
	wonDelta uint64,
	lostDelta uint64,
	forfeitedDelta uint64,
) (playerInfo leaderboard.PlayerInfo) {
	playerInfo, found := k.board.GetPlayerInfo(ctx, player.String())
	if !found {
		playerInfo = leaderboard.PlayerInfo{
			Index:          player.String(),
			WonCount:       0,
			LostCount:      0,
			ForfeitedCount: 0,
			DateUpdated:    ctx.BlockTime().UTC().Format(types.DeadlineLayout),
		}
	}
	playerInfo.WonCount += wonDelta
	playerInfo.LostCount += lostDelta
	playerInfo.ForfeitedCount += forfeitedDelta
	k.board.SetPlayerInfo(ctx, playerInfo)
	return playerInfo
}

func (k *Keeper) MustAddWonGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) leaderboard.PlayerInfo {
	return mustAddDeltaGameResultToPlayer(k, ctx, player, 1, 0, 0)
}

func (k *Keeper) MustAddLostGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) leaderboard.PlayerInfo {
	return mustAddDeltaGameResultToPlayer(k, ctx, player, 0, 1, 0)
}

func (k *Keeper) MustAddForfeitedGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) leaderboard.PlayerInfo {
	return mustAddDeltaGameResultToPlayer(k, ctx, player, 0, 0, 1)
}

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

func (k *Keeper) MustRegisterPlayerWin(ctx sdk.Context, storedGame *types.StoredGame) (winnerInfo leaderboard.PlayerInfo, loserInfo leaderboard.PlayerInfo) {
	winnerAddress, loserAddress := getWinnerAndLoserAddresses(storedGame)
	return k.MustAddWonGameResultToPlayer(ctx, winnerAddress),
		k.MustAddLostGameResultToPlayer(ctx, loserAddress)
}

func (k *Keeper) MustRegisterPlayerForfeit(ctx sdk.Context, storedGame *types.StoredGame) (winnerInfo leaderboard.PlayerInfo, forfeiterInfo leaderboard.PlayerInfo) {
	winnerAddress, loserAddress := getWinnerAndLoserAddresses(storedGame)
	return k.MustAddWonGameResultToPlayer(ctx, winnerAddress),
		k.MustAddForfeitedGameResultToPlayer(ctx, loserAddress)
}
