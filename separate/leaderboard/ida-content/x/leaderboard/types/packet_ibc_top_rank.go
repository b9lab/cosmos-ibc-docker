package types

// ValidateBasic is used for validating the packet
func (p IbcTopRankPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcTopRankPacketData) GetBytes() ([]byte, error) {
	var modulePacket LeaderboardPacketData

	modulePacket.Packet = &LeaderboardPacketData_IbcTopRankPacket{&p}

	return modulePacket.Marshal()
}
