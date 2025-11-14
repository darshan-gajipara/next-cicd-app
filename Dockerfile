FROM node:20

WORKDIR /myapp

COPY . /myapp/

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]