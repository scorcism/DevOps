FROM node:latest

WORKDIR /app

COPY backend/package.json .

RUN npm install

COPY backend/index.js .

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]