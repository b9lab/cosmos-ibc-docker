# Test Checkers leaderboard extension

## Build Docker images

to build the **image for the checkers game with the leaderboard**, clone the repository and run:

```
$ cd cosmos-ibc-docker/modular
$ docker build -f Dockerfile-checkers . -t checkers --no-cache
```

and to build the **image for the leaderbaord chain**:

```
$ cd cosmos-ibc-docker/modular
$ docker build -f Dockerfile-leaderboard . -t leaderboard --no-cache
```

In addition, you will need to build the **relayer image**:

```
$ cd cosmos-ibc-docker/modular/relayer
$ docker build -f Dockerfile . -t relayer --no-cache
```

## Start the network

You can use the provided compose file to spin up a network with a checkers blockchain, a leaderboard chain and a relayer:

```
$ cd cosmos-ibc-docker/modular
$ docker-compose -f modular.yaml up

```

Observe the output of `docker-compose` until the chains are ready - it will take some time for the chains to be ready. 

## Start the relayer

If the chains are ready, you can start the relayer process:

```
$ docker exec relayer ./run-relayer.sh 
```

wait till the connection is etablished and a channel is created. 

## Create a game and play it till end

The easiest way to do so is to start the test script, jump into container:

```
$ docker exec -it checkers bash
```

and run:

```
$ ./test.sh 1 cosmos14y0kdvznkssdtal2r60a8us266n0mm97r2xju8 cosmos1n4mqetruv26lm2frkjah86h642ts84qyd5uvyz
```

this will crate and play a game in the checkers chain. The number `1` indicates the game index. You can increase it for the next test if you want it to play another game. It lets the second address win.

After a game is over, you can query the player information:

```
$ checkersd query leaderboard list-player-info
```

You can send the score of the player to leaderboard chain. In the checkers chain container:

```
$ checkersd tx leaderboard send-candidate leaderboard channel-0 --from cosmos14y0kdvznkssdtal2r60a8us266n0mm97r2xju8
```

After a while, you can jump into the leaderboard chain:

```
$ docker exec -it leaderboard bash
```

to query the received player information:

```
$ leaderboardd q leaderboard list-player-info
```

to query the leaderboard:

```
$ leaderboardd q leaderboard show-board
``