FROM ubuntu:22.04


RUN apt-get update
RUN apt-get install -y nginx zip curl node

RUN echo "daemon off;" >>/etc/nginx/nginx.conf
RUn cd /var/www/html/

RUN curl -o master.zip -L https://github.com/scorcism/memory-game/archive/refs/heads/main.zip

RUN unzip master.zip mv memory-game-main/* . 

RUN rm -rf memory-game-main master.zip

RUN npm install

EXPOSE 3000

CMD ["/usr/sbin/nginx","-C", "/etc/nginx/nginx.conf"]