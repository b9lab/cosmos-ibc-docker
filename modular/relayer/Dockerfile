# This Dockerfile will: 
# set up a Golang environment(using Golang Docker Image)
# and install Go Relayer

# Use Golang Docker Image
FROM golang:1.18

# Set working dir
WORKDIR /home/rly

# Install git
RUN apt-get install git

# Clone relayer repository
RUN git clone https://github.com/cosmos/relayer.git

# Install relayer
RUN cd relayer && make install

# Copy configs
ADD configs /home/rly/configs

# Copy pahts
ADD paths /home/rly/paths

# Copy entrypoint script
COPY ./run-relayer.sh /home/rly/

# Set permission
RUN chmod +x ./run-relayer.sh

# Run entrypoint script
# ENTRYPOINT ["/bin/bash", "-c", "/home/rly/run-relayer.sh"]

# build with
# docker build -f Dockerfile . -t relayer

