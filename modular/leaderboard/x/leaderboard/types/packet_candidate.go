package types

import (
	"errors"
)

// ValidateBasic is used for validating the packet
func (p CandidatePacketData) ValidateBasic() error {

	// TODO: Validate the packet data

  // return error if player address is empty
  if p.PlayerInfo.Index == "" {
      return errors.New("Player address cannot be empty")
  }

	return nil
}

// GetBytes is a helper for serialising
func (p CandidatePacketData) GetBytes() ([]byte, error) {
	var modulePacket LeaderboardPacketData

	modulePacket.Packet = &LeaderboardPacketData_CandidatePacket{&p}

	return modulePacket.Marshal()
}
