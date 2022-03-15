ARG nodeVersion
ARG devPort
ARG author

FROM node:${nodeVersion}

LABEL author=${author}

# RUN npm install -g yarn

WORKDIR /app

COPY . .

ENV TZ=Asia/Seoul

RUN yarn install

EXPOSE ${devPort}

CMD ["yarn", "serve"]