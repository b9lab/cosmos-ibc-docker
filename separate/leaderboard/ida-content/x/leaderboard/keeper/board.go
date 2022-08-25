package keeper

import (
	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBoard set a specific board in the store from its index
func (k Keeper) SetBoard(ctx sdk.Context, board types.Board) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))
	b := k.cdc.MustMarshalBinaryBare(&board)
	store.Set([]byte{0}, b)
}

// GetBoard returns a board from its index
func (k Keeper) GetBoard(ctx sdk.Context, index string) (val types.Board, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveBoard removes a board from the store
func (k Keeper) RemoveBoard(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllBoard returns all board
func (k Keeper) GetAllBoard(ctx sdk.Context) (list []types.Board) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BoardKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Board
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
