FROM node:lts-alpine

RUN echo -e "http://nl.alpinelinux.org/alpine/v3.5/main\nhttp://nl.alpinelinux.org/alpine/v3.5/community" > /etc/apk/repositories

RUN apk update && apk add bash

COPY package*.json ./

ENV PORT=3000

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "start"]
