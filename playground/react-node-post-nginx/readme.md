


## Commands


```bash

docker build -f Dockerfile.dev -t scor32k/multi-client .

docker run -d -p 4002:3000 scor32k/multi-client

docker build -f Dockerfile.dev -t scor32k/multi-server .

docker run -d -p 4003:5000 scor32k/multi-server

```