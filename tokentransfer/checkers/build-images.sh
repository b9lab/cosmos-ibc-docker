docker build -f Dockerfile . -t checkersa --build-arg configyml=./configa.yml --no-cache
docker build -f Dockerfile . -t checkersb --build-arg configyml=./configb.yml --no-cache