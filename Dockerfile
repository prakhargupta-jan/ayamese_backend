FROM node:18-alpine as base
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM base as dev
COPY . .
CMD node ./utils/populateDB.js && npm run test && npm run dev

FROM base as prod
COPY . .
RUN rm .env
RUN mv prod.env .env
CMD ["npm", "run", "start"]