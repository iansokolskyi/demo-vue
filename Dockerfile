FROM node:13

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

ARG PORT
ARG API_URL

ENV PORT=$PORT
ENV API_URL=$API_URL

EXPOSE $PORT

CMD ["npm", "run", "serve"]