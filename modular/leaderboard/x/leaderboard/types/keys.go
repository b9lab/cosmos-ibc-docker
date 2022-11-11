package types

const (
	// ModuleName defines the module name
	ModuleName = "leaderboard"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_leaderboard"

	// Version defines the current version the IBC module supports
	Version = "leaderboard-1"

	// PortID is the default port id that module binds to
	PortID = "leaderboard"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("leaderboard-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	BoardKey = "Board-value-"
)

const (
	TimeLayout              = "2006-01-02 15:04:05.999999999 +0000 UTC"
	LeaderboardWinnerLength = uint64(100)
)
