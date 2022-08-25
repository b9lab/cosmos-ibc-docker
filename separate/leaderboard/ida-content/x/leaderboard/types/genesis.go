package types

import (
	"fmt"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId: PortID,
		// this line is used by starport scaffolding # genesis/types/default
		BoardList:      []*Board{},
		PlayerInfoList: []*PlayerInfo{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated index in board
	boardGameIdMap := make(map[string]bool)

	for _, elem := range gs.BoardList {
		if _, ok := boardGameIdMap[elem.GameID]; ok {
			return fmt.Errorf("duplicated index for board")
		}
		boardGameIdMap[elem.GameID] = true
	}
	// Check for duplicated index in playerInfo
	playerInfoPlayerIDMap := make(map[string]bool)

	for _, elem := range gs.PlayerInfoList {
		if _, ok := playerInfoPlayerIDMap[elem.PlayerID]; ok {
			return fmt.Errorf("duplicated index for playerInfo")
		}
		playerInfoPlayerIDMap[elem.PlayerID] = true
	}

	return nil
}
