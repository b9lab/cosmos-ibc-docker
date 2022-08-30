# This Dockerfile will: 
# set up a Rust environment(using Rust Docker Image)
# and install the Hermes Relayer

# Use Rust Docker Image
FROM rust:1.61.0

# Set working dir
WORKDIR /home/rly

RUN rustup default nightly && rustup update

# Install Hermes
RUN cargo install ibc-relayer-cli@1.0.0 --bin hermes --locked

# Copy config file
COPY ./config.toml /root/.hermes/config.toml

# Validate the config file during image building
RUN hermes config validate

# Copy mnemonic files
COPY ./alice.json /home/rly/alice.json
COPY ./bob.json /home/rly/bob.json

# Add the keys
RUN hermes keys add --chain checkersa --mnemonic-file "alice.json"
RUN hermes keys add --chain checkersb --mnemonic-file "bob.json"