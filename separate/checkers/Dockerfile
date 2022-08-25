# This Dockerfile will: 
# set up a Golang environment(using Golang Docker Image)
# install Ignite
# clone the checkers game repository
# with the leaderboard included
# start a checkers blockchain
# expose api endpoints

# Use Golang Docker Image
FROM golang:1.18

# Set working dir
WORKDIR /home/checkers

# Install tools
RUN apt-get install curl git

# Install ignite
RUN curl -L https://get.ignite.com/cli@v0.17.3! | bash

# Install dependencies
RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest

# Copy local repository
ADD b9-checkers-academy-draft /home/checkers

# Install more dependencies
RUN go get github.com/golangci/golangci-lint/cmd/golangci-lint
RUN go get golang.org/x/crypto/ssh/terminal@v0.0.0-20220411220226-7b82a4e95df4
RUN git clone https://github.com/regen-network/cosmos-proto && cd cosmos-proto/protoc-gen-gocosmos && go install

# Copy Config.yml
ARG configyml
COPY ${configyml} /home/checkers/config.yml

# Copy Test
COPY ./test.sh /home/checkers
RUN chmod +x ./test.sh

# Copy serve script
COPY ./run-checkers.sh /home/checkers
RUN chmod +x ./run-checkers.sh

ENTRYPOINT ["/bin/bash", "-c", "/home/checkers/run-checkers.sh"]
EXPOSE 26657 1317 4500
