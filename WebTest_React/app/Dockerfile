FROM node:10.16.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN apt-get update
RUN apt-get install -y nginx
COPY . .
EXPOSE 80
CMD ["npm", "run","build"]
CMD ["service","nginx","start"]






