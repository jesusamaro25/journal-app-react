FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN yarn add ...

COPY . .

CMD ["yarn", "start"]