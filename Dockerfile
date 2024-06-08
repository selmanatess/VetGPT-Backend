# syntax=docker/dockerfile:1

FROM node:20
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
CMD ["ts-node", "src/index.ts"]
EXPOSE 3000
