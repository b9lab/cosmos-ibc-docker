## Build Docker images

to build the **images for the checkers game**, clone the repository and run:

```
$ cd cosmos-ibc-docker/tokentransfer/checkers
$ ./build-images.sh
```

In addition, you will need to build the **relayer image**:

```
$ cd cosmos-ibc-docker/tokentransfer/relayer
$ docker build -f Dockerfile . -t relayer --no-cache
```

## Start the network

You can use the provided compose file to spin up a network with two checkers blockchains and a relayer:

```
$ cd cosmos-ibc-docker/tokentransfer
$ docker-compose -f tokentransfer.yml up

```

Observe the output of `docker-compose` until the chains are ready - it will take some time for the chains to be ready. 

## Start the relayer

If the chains are ready, you can start the relayer process:

```
$ docker exec relayer ./run-relayer.sh 
```

## Transfer some token

The chains have pre-created accounts with some token. In a new terminal, check the balance of the accounts:

```
$ docker exec relayer rly q bal checkersa
$ docker exec relayer rly q bal checkersb
```

You can check the addresses with:

```
$ docker exec relayer rly chains address checkersa
$ docker exec relayer rly chains address checkersb
```

You can use the relayer to send an IBC transaction:

```
$ docker exec relayer rly tx transfer checkersa checkersb 10token cosmos173czeq76k0lh0m6zcz72yu6zj8c6d0tf294w5k channel-0
```

And, check the balances again. 
