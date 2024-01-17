FROM node:18-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]