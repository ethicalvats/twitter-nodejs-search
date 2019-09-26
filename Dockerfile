FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN ["npm", "test"]
CMD [ "npm", "start"]