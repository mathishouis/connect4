FROM --platform=linux/amd64 node:20-slim

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json /usr/src/api
RUN npm install

COPY . /usr/src/api

EXPOSE 3000
CMD npm run start
