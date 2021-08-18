FROM node:14-alpine

RUN mkdir -p /application

COPY index.js /application

EXPOSE 8080

CMD ["node","/application/index"]