FROM node:17-alpine as build

WORKDIR /usr/app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /usr/app

RUN npm install

COPY . . 

RUN npm run build


FROM nginx:1.17.8-alpine

COPY --from=build /usr/app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
