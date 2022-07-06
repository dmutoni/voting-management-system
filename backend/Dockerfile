FROM node:17
#specify the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY package.json .
RUN yarn install

COPY . .

EXPOSE 5050

CMD ["yarn", "start"]
