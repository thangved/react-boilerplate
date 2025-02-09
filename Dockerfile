FROM node:22 AS base

FROM base AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm i --ignore-scripts

COPY ./locales ./locales
COPY ./public ./public
COPY ./src ./src
COPY ./index.html\
    ./tsconfig.json\
    ./tsconfig.node.json\
    ./vite.config.ts\
    ./

RUN npm run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
