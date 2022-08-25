package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
)

func createNBoard(keeper *Keeper, ctx sdk.Context, n int) []types.Board {
	items := make([]types.Board, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetBoard(ctx, items[i])
	}
	return items
}

func TestBoardGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBoard(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBoard(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestBoardRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBoard(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBoard(ctx, item.Index)
		_, found := keeper.GetBoard(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestBoardGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBoard(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBoard(ctx))
}
