FROM node:14-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 80:3000

CMD [ "yarn", "start" ]
