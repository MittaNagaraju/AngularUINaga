# Stage 1
FROM node:10.23.0-alpine as node
LABEL author="Nagaraju Mitta"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN ng build --prod=true --aot=true --extractCss=true --optimization=true --environment=prod

#stage 2
FROM nginx:alpine as prod-stage
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
