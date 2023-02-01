package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "leaderboard/testutil/keeper"
	"leaderboard/testutil/nullify"
	"leaderboard/x/leaderboard/types"
)

func TestBoardQuery(t *testing.T) {
	keeper, ctx := keepertest.LeaderboardKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestBoard(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetBoardRequest
		response *types.QueryGetBoardResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetBoardRequest{},
			response: &types.QueryGetBoardResponse{Board: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Board(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
