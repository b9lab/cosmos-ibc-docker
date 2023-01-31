package mock_types

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/golang/mock/gomock"
)

func (escrow *MockCheckersLeaderboardKeeper) ExpectAny(context context.Context) {
	escrow.EXPECT().MustAddWonGameResultToPlayer(sdk.UnwrapSDKContext(context), gomock.Any()).AnyTimes()
	escrow.EXPECT().MustAddLostGameResultToPlayer(sdk.UnwrapSDKContext(context), gomock.Any()).AnyTimes()
	escrow.EXPECT().MustAddForfeitedGameResultToPlayer(sdk.UnwrapSDKContext(context), gomock.Any()).AnyTimes()
}

func (escrow *MockCheckersLeaderboardKeeper) ExpectWin(context context.Context, who string) *gomock.Call {
	whoAddr, err := sdk.AccAddressFromBech32(who)
	if err != nil {
		panic(err)
	}
	return escrow.EXPECT().MustAddWonGameResultToPlayer(sdk.UnwrapSDKContext(context), whoAddr)
}

func (escrow *MockCheckersLeaderboardKeeper) ExpectLoss(context context.Context, who string) *gomock.Call {
	whoAddr, err := sdk.AccAddressFromBech32(who)
	if err != nil {
		panic(err)
	}
	return escrow.EXPECT().MustAddLostGameResultToPlayer(sdk.UnwrapSDKContext(context), whoAddr)
}

func (escrow *MockCheckersLeaderboardKeeper) ExpectForfeit(context context.Context, who string) *gomock.Call {
	whoAddr, err := sdk.AccAddressFromBech32(who)
	if err != nil {
		panic(err)
	}
	return escrow.EXPECT().MustAddForfeitedGameResultToPlayer(sdk.UnwrapSDKContext(context), whoAddr)
}
