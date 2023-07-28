FROM ubuntu:22.04

RUN apt -y update
RUN apt install -y git
RUN apt install -y nodejs
RUN apt install -y npm

RUN mkdir /var/web

WORKDIR /var/web

RUN git clone https://github.com/scorcism/memory-game.git .

RUN npm install

EXPOSE 3000

CMD ["npm","run","start"]