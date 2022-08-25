## Build Docker images

First you will need to build the docker **image for the checkers game**:

```
$ cd cosmos-ibc-docker/separate/checkers
$ docker build -f Dockerfile . -t checkers --build-arg configyml=./config.yml --no-cache
```

and the **image for the the leaderboard**:

```
$ cd cosmos-ibc-docker/separate/leaderboard
$ docker build -f Dockerfile . -t leaderboard --build-arg configyml=./config.yml --no-cache
```

as well as the **relayer image**:

```
$ cd cosmos-ibc-docker/separate/relayer
$ docker build -f Dockerfile . -t relayer --no-cache
```

## Start the network

You can use the provided compose file to spin up a network with a checkers blockchain, a leaderboard blockchain and a relayer:

```
$ cd cosmos-ibc-docker/separate
$ docker-compose -f separate.yml up

```

Observe the output of `docker-compose` until the chains are ready - it will take some time for the chains to be ready. 

## Start the relayer

If the chains are ready, you can start the relayer process:

```
$ docker exec relayer ./run-relayer.sh 
```

wait till the connection is etablished and a channel is created. 

## Create and play a game

Jump into checkers container:

```
$ docker exec -it checkersb bash
```

let the test script create and play a game:

```
 ./test.sh 1 checkers cosmos1n4mqetruv26lm2frkjah86h642ts84qyd5uvyz cosmos14y0kdvznkssdtal2r60a8us266n0mm97r2xju8
```

Send the score if the game is over:

```
$  checkersd tx checkers send-score checkers channel-0 --from cosmos1n4mqetruv26lm2frkjah86h642ts84qyd5uvyz --chain-id checkers
```

## Check Ibc Score

Jump into leaderboard chain:

```
$ docker exec -it leaderboard bash
```

and check the board:

```
$ leaderboardd q leaderboard list-board
```