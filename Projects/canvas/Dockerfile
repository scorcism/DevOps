FROM node:20-alpine3.17

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]

# Example RUN
# docker build -t canvas:v1 .
# docker run -d -p 5555:3000 --name canva1 canvas:v1