package types

import (
	"sort"
	"time"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func ParseDateAddedAsTime(dateAdded string) (dateAddedParsed time.Time, err error) {
	dateAddedParsed, errDateAdded := time.Parse(TimeLayout, dateAdded)
	return dateAddedParsed, sdkerrors.Wrapf(errDateAdded, ErrInvalidDateAdded.Error(), dateAdded)
}

func SortPlayerInfo(playerInfoList []PlayerInfo) {
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

func UpdatePlayerInfoList(winners []PlayerInfo, candidates []PlayerInfo) (updated []PlayerInfo) {
	found := false
	for _, candidate := range candidates {
		for winnerIndex, winner := range winners {
			if winner.Index == candidate.Index {
				winners[winnerIndex] = candidate
				found = true
				break
			}
		}
		if !found {
			updated = append(winners, candidate)
		} else {
			updated = winners
		}
	}
	SortPlayerInfo(updated)
	if LeaderboardWinnerLength < uint64(len(updated)) {
		updated = updated[:LeaderboardWinnerLength]
	}
	return updated
}
