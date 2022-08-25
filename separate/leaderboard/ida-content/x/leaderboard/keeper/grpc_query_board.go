package keeper

import (
	"context"

	"github.com/cosmonaut/leaderboard/x/leaderboard/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BoardAll(c context.Context, req *types.QueryAllBoardRequest) (*types.QueryAllBoardResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var boards []*types.Board
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	boardStore := prefix.NewStore(store, types.KeyPrefix(types.BoardKey))

	pageRes, err := query.Paginate(boardStore, req.Pagination, func(key []byte, value []byte) error {
		var board types.Board
		if err := k.cdc.UnmarshalBinaryBare(value, &board); err != nil {
			return err
		}

		boards = append(boards, &board)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBoardResponse{Board: boards, Pagination: pageRes}, nil
}

func (k Keeper) Board(c context.Context, req *types.QueryGetBoardRequest) (*types.QueryGetBoardResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBoard(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetBoardResponse{Board: &val}, nil
}
