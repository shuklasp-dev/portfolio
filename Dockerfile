FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_BASE_URL
ARG VITE_STRAPI_API_TOKEN
ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_STRAPI_API_TOKEN=$VITE_STRAPI_API_TOKEN
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]