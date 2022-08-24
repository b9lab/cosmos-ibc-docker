package types

import (
	"errors"
)

// ValidateBasic is used for validating the packet
func (p ScorePacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	// return error if player address is empty
	if p.PlayerAddress == "" {
		return errors.New("Player address cannot be empty")
	}

	return nil
}

// GetBytes is a helper for serialising
func (p ScorePacketData) GetBytes() ([]byte, error) {
	var modulePacket CheckersPacketData

	modulePacket.Packet = &CheckersPacketData_ScorePacket{&p}

	return modulePacket.Marshal()
}
