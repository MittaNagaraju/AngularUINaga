# Stage 1
FROM node:10.23.0-alpine as node
LABEL author="Nagaraju Mitta"
WORKDIR /app
COPY package.json ./

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify

RUN npm install -g @angular/cli
RUN npm install \ 
  && npm cache clean --force 
COPY . .
RUN ng build --prod

#stage 2
FROM nginx:alpine as prod-stage
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
