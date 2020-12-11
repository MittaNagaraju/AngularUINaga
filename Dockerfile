# Stage 1
FROM node:11.15.0-alpine as node
LABEL author="Nagaraju Mitta"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:alpine as prod-stage
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
