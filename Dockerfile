FROM node:8

WORKDIR /app

COPY ./package.json /app/package.json
RUN yarn install

COPY . ./

CMD ["yarn", "docs:dev"]