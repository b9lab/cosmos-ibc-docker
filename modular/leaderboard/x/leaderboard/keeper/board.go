package keeper

import (
	"sort"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"leaderboard/x/leaderboard/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// SetBoard set board in the store
func (k Keeper) SetBoard(ctx sdk.Context, board types.Board) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))
	b := k.cdc.MustMarshal(&board)
	store.Set([]byte{0}, b)
}

// GetBoard returns board
func (k Keeper) GetBoard(ctx sdk.Context) (val types.Board, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBoard removes board from the store
func (k Keeper) RemoveBoard(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))
	store.Delete([]byte{0})
}

func ParseDateAddedAsTime(dateAdded string) (dateAddedParsed time.Time, err error) {
	dateAddedParsed, errDateAdded := time.Parse(types.TimeLayout, dateAdded)
	return dateAddedParsed, sdkerrors.Wrapf(errDateAdded, types.ErrInvalidDateAdded.Error(), dateAdded)
}

func SortPlayerInfo(playerInfoList []types.PlayerInfo) {
	sort.SliceStable(playerInfoList[:], func(i, j int) bool {
		if playerInfoList[i].WonCount > playerInfoList[j].WonCount {
			return true
		}
		if playerInfoList[i].WonCount < playerInfoList[j].WonCount {
			return false
		}
		firstPlayerTime, _ := ParseDateAddedAsTime(playerInfoList[i].DateUpdated)
		secondPlayerTime, _ := ParseDateAddedAsTime(playerInfoList[j].DateUpdated)

		return firstPlayerTime.After(secondPlayerTime)
	})
}

func (k Keeper) UpdateBoard(ctx sdk.Context, playerInfoList []types.PlayerInfo) {
	SortPlayerInfo(playerInfoList)

	if types.LeaderboardWinnerLength < uint64(len(playerInfoList)) {
		playerInfoList = playerInfoList[:types.LeaderboardWinnerLength]
	}

	k.SetBoard(ctx, types.Board{
		PlayerInfo: playerInfoList,
	})
}
