FROM node

WORKDIR /app

COPY ./backend/package.json .

RUN npm install

COPY ./backend/index.js .

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "start" ]