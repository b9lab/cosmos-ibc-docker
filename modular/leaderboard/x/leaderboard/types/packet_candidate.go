package types

// ValidateBasic is used for validating the packet
func (p CandidatePacketData) ValidateBasic() error {

	// return error if player info is incorrect
	playerInfoErr := p.PlayerInfo.ValidateBasic()
	if playerInfoErr != nil {
		return playerInfoErr
	}

	return nil
}

// GetBytes is a helper for serialising
func (p CandidatePacketData) GetBytes() ([]byte, error) {
	var modulePacket LeaderboardPacketData

	modulePacket.Packet = &LeaderboardPacketData_CandidatePacket{&p}

	return modulePacket.Marshal()
}
