FROM node:12.13.0-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm i

COPY . /app
