FROM node:22 AS base

FROM base AS builder

WORKDIR /app

ADD ./package.json ./

RUN npm i --ignore-scripts

ADD ./locales ./locales
ADD ./public ./public
ADD ./src ./src
ADD ./index.html\
    ./tsconfig.json\
    ./tsconfig.node.json\
    ./vite.config.ts\
    ./

RUN npm run build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
ADD ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
