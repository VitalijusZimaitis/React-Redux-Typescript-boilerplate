FROM node:14 as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN npm install yarn
RUN rm -rf node_modules
RUN yarn install

COPY . ./

RUN yarn build

FROM nginx:1.17

COPY --from=build-stage /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80:80
EXPOSE 443:443
