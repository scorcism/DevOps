
## commands

Dockerfile
```Dockerfile
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "node", "index.js" ]
```

### Build Image

```bash
docker build -t nodeserver .
```