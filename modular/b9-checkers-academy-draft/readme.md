# Checkers leaderboard extension

You can scaffold an ibc enabled module for a leaderboard via:

```
$ ignite scaffold module leaderboard --ibc
```

in order to create and maintain a leaderboard, we need to store player information, so you can scaffold a structure with:

```
$ ignite scaffold map playerInfo wonCount:uint lostCount:uint forfeitedCount:uint dateUpdated:string --module leaderboard --no-message
```

you can use this structure to create the board itself:

```
$ ignite scaffold single board PlayerInfo:PlayerInfo --module leaderboard --no-message
```

A few manual adjusments after that:

- [Make the board nullable](https://github.com/b9lab/cosmos-ibc-docker/commit/c674769cf38213f7c3375dd3235e359018ab6f4a#diff-41f55b417481bd4e1ae4b119eac6da05349977de6b302b2e2ba8d93e6ede01f8)
- [Adjust the capabilities](https://github.com/b9lab/cosmos-ibc-docker/commit/a51bb14a50904e74c24e003286110b7ebcc0519e)
- [Create a PlayerInfo handler](https://github.com/b9lab/cosmos-ibc-docker/commit/dacc390929eae01f37b7be1d922402f385641c46)
- [Make checkers game update PlayerInfo](https://github.com/b9lab/cosmos-ibc-docker/commit/007cb92d24afb3689e8c3a41127870e74fb511cd)
- [Sort and clip the board](https://github.com/b9lab/cosmos-ibc-docker/commit/dde366bbd210b18d425ebdcd6d16e40b81e2ca15)

You can scaffold a message to trigger an update on the leaderboard:

```
$ ignite scaffold message updateBoard --module leaderboard
```

after [a small adjusment](https://github.com/b9lab/cosmos-ibc-docker/commit/2fa4fb91cdb9eb297d6e923350dec231e7f29564#diff-395f05563b2a96352e919ca4382dd37aab5153c7f6ae6fd2c1e23985abb8a0fc), this message can bbe used to update(sort&clip) the board from the PlayerInfo.

You can start the chain with:
```
$ ignite chain serve --reset-once
```

and run a test game, using your addresses:

```
$ ./test.sh 1 checkers $player1address $player2address
```

for the next game to test, use

```
$ ./test.sh 2 checkers $player1address $player2address
```

or switch the addresses to let the other player win.

You can query the playerInfo with:

```
$ checkersd query leaderboard list-player-info
```

and update the board with:

```
$ checkersd tx leaderboard update-board --from $useraddress
```

and query with:

```
$  checkersd query leaderboard show-board
```