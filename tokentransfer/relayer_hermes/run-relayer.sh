#!/bin/sh

hermes keys add --chain checkersa --mnemonic-file "alice.json"
hermes keys add --chain checkersb --mnemonic-file "bob.json"

hermes create channel --a-chain checkersa --b-chain checkersb --a-port transfer --b-port transfer --new-client-connection
hermes start