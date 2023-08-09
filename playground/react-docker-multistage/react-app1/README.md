# react multi stage docker build

## Commands used

### Dockerfile

```bash
vi Dockerfile

FROM node:20-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]
```

### Build and run
```bash
docker build -t react-app .

docker run -d -p 3000:5173 --name rc1 react-app

docker exec -it rc1 sh

docker container rm -f $(docker ps -q) # remove all container including running
```

### .dockerignore

```bash
vi .dockerignore

node_modules
Dockerfile
.git
.gitignore
.dockerignore
.env
```

### Volumes and Bind Mount

Take a directoty from the host machine, and sync it with the folder in docker container

```bash
# docker run -v dirLocalDirectory:dirContainerDirectory -d -p 3000:5173 --name rc1 react-image

docker run -v $(pwd):/app/ -d -p 3000:5173 --name rc1 react-image

# Read only bind mount -> restrict write from container

docker run -v $(pwd):/app/:ro -d -p 3000:5173 --name rc1 react-image
```

### Env variables

-e name=value

```Dockerfile
FROM node:20-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_NAME=myname 

EXPOSE 5173

CMD [ "npm","run","dev" ]
```

```bash
docker run -v $(pwd):/app/:ro -e REACT_APP_NAME=abhishekhere  -d -p 3000:5173 --name rc1 react-image

# Using env file

docker run -v $(pwd):/app/:ro --env-file ./.env   -d -p 3000:5173 --name rc1 react-image
```

### Docker Compose

```bash
vi docker-compose.yml
```

```yaml
version: "3"

services:
  react-app: # service name
    build: . # path to docker file
    ports:
      - "3000:5173"
    volumes:
      - ./src:/app/src:ro
```

```bash
docker-compose up
docker-compose down
```

#### Rebuid the image again
```bash
docker-compose up -d --build
```

### Modify Dockerfile name

```bash
mv Dockerfile Dockerfile.dev

docker build -t imagename -f Dockerfile.dev .

```

#### In docker compose
```yml

version: "3"

services:
  react-app: # service name
    build: 
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:5173"
    volumes:
      - ./src:/app/src:ro
```

### Multi stage build
#### Production with NGINX 


![multi stage](https://imgur.com/PMcSsWX.png)

```bash
vi Dockerfile
```

```Dockerfile
# Stage 1
FROM node:20-alpine3.17 as react-build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx

COPY --from=react-build /app/dist /usr/share/nginx/html

```

```bash
docker build -f Dockerfile.prod -t docker-image-prod .

docker run -d -p 8080:80 --name rc-prod docker-image-prod
```

### Docker compose dev prod

```bash
touch docker-compose.yml
touch docker-compose.prod.yml
touch docker-compose.dev.yml
```

```bash
vi docker-compose.yml
```

**shared config file**
```yml
version: "3"

services:
  react-app: # service name
    build: 
      context: .
      dockerfile: Dockerfile.dev
```

```bash
vi docker-compose.dev.yml
```

```yml
version: "3"

services:
  react-app: # service name
    build: 
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:5173"
    volumes:
      - ./src:/app/src:ro
```

```bash
vi docker-compose.prod.yml
```

```yml
version: "3"

services:
  react-app: # service name
    build: 
      context: .
      dockerfile: Dockerfile.prod
    ports:
      - "8080:90"
```

```bash
docker-compose -f docker-compose.yml docker-compose.dev.yml up -d --build
```

### Run specific build stage

```bash
docker build --target aliasName -t multi-stage-build -f Dockerfile.dev 
```