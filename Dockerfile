# Stage 1
FROM node:12.20.0-alpine as node
LABEL author="Nagaraju Mitta"
WORKDIR /app
COPY package.json ./

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:alpine as prod-stage
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
