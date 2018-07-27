FROM node

MAINTAINER Cesar Soares

COPY . /usr/app

WORKDIR /usr/app

RUN  npm install -g ts-node
RUN  npm install -g typescript
RUN npm install -g nodemon

EXPOSE 3000

VOLUME [ "/usr/app" ]