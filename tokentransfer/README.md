## Build Docker images

to build the **images for the checkers game**, clone the repository and run:

```
$ cd cosmos-ibc-docker/tokentransfer/checkers
$ ./build-images.sh
```

In addition, you will need to build the **relayer images**. 
If you want to test the Go relayer:

```
$ cd cosmos-ibc-docker/tokentransfer/relayer_go
$ docker build -f Dockerfile . -t relayer --no-cache
```

and if you want to do your test with the Hermes relayer:

```
$ cd cosmos-ibc-docker/tokentransfer/relayer_hermes
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

If the chains are ready, you can start the relayer process. In a new terminal, jump into the relayer container:

```
$ docker exec -it relayer bash
```

in it, initialize and start the relayer process:

```
$ ./run-relayer.sh 
```

## Transfer some token(Go Relayer)

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

## Transfer some token(Hermes Relayer)

The chains have pre-created accounts with some token. In a new terminal, check the balance of the accounts:

```
$ docker exec checkersa checkersd query bank balances cosmos14y0kdvznkssdtal2r60a8us266n0mm97r2xju8
$ docker exec checkersb checkersd query bank balances cosmos173czeq76k0lh0m6zcz72yu6zj8c6d0tf294w5k
```

You can use the relayer to send an IBC transaction:

```
$ docker exec relayer hermes tx ft-transfer --src-chain checkersa --dst-chain checkersb --src-port transfer --src-channel channel-0 --amount 100 --denom token --timeout-height-offset 1000
```

And, check the balances again. 