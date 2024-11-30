FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
COPY index.html index.html
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]