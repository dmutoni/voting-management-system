FROM node:17-alpine as build

WORKDIR /usr/app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /usr/app/

RUN yarn install --production

COPY . .

RUN npm run build

FROM  nginx:1.15
COPY --from=build  /usr/app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
# RUN npm run build
# CMD [ "npm","start" ]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
