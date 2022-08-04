package types

// ValidateBasic is used for validating the packet
func (p ScorePacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ScorePacketData) GetBytes() ([]byte, error) {
	var modulePacket CheckersPacketData

	modulePacket.Packet = &CheckersPacketData_ScorePacket{&p}

	return modulePacket.Marshal()
}
