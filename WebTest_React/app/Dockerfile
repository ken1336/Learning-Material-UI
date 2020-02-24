FROM node:10.16.3 AS build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run","build"]

FROM nginx:1.13.9-alpine AS deploy
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




