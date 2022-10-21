package keeper

import (
  "github.com/b9lab/checkers/x/leaderboard/types"
  sdk "github.com/cosmos/cosmos-sdk/types"
)

func mustAddDeltaGameResultToPlayer(
  k *Keeper,
  ctx sdk.Context,
  player sdk.AccAddress,
  wonDelta uint64,
  lostDelta uint64,
  forfeitedDelta uint64,
) (playerInfo types.PlayerInfo) {
  playerInfo, found := k.GetPlayerInfo(ctx, player.String())
  if !found {
    playerInfo = types.PlayerInfo{
      Index:          player.String(),
      WonCount:       0,
      LostCount:      0,
      ForfeitedCount: 0,
      DateUpdated:    ctx.BlockTime().UTC().Format(types.TimeLayout),
    }
  }
  playerInfo.WonCount += wonDelta
  playerInfo.LostCount += lostDelta
  playerInfo.ForfeitedCount += forfeitedDelta
  k.SetPlayerInfo(ctx, playerInfo)
  return playerInfo
}

func (k *Keeper) MustAddWonGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) types.PlayerInfo {
  return mustAddDeltaGameResultToPlayer(k, ctx, player, 1, 0, 0)
}

func (k *Keeper) MustAddLostGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) types.PlayerInfo {
  return mustAddDeltaGameResultToPlayer(k, ctx, player, 0, 1, 0)
}

func (k *Keeper) MustAddForfeitedGameResultToPlayer(ctx sdk.Context, player sdk.AccAddress) types.PlayerInfo {
  return mustAddDeltaGameResultToPlayer(k, ctx, player, 0, 0, 1)
}