FROM node:13.8.0-alpine
COPY dist dist/
COPY package.json .

ENV PORT 9822
EXPOSE 9822

CMD [ "npm", "run", "production" ]