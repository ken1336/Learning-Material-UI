FROM node:10.16.3 AS start
RUN mkdir /usr/src/app



COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]





