FROM node:14.18.1@sha256:c5b4544cee41df44e2bcaaaba642235fb01408c11411ca16fa454598c1168063

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8084

CMD ["npm", "start"]