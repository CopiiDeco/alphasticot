FROM node:10
WORKDIR /usr/src/app
COPY /src ./src/
COPY /package*.json ./
RUN cd src && npm install && npm run build

EXPOSE 3080

CMD ["node", "./api/server.js"]