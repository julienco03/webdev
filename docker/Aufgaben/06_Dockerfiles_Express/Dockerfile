FROM node

WORKDIR /web-app

COPY express-app/* ./

RUN npm install -r package.json

EXPOSE 8080

CMD [ "node", "app.js" ]
