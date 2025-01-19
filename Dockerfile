FROM node:18-slim

WORKDIR /app/docs

COPY docs/package.json docs/yarn.lock ./

RUN yarn install

COPY docs/ ./

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start", "--host", "0.0.0.0"]