FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_BASE_URL
ARG VITE_STRAPI_API_TOKEN
ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_STRAPI_API_TOKEN=$VITE_STRAPI_API_TOKEN

ARG COMMIT_SHA_ARG="unknown"
ENV VITE_COMMIT_SHA=$COMMIT_SHA_ARG

RUN npm run build

RUN echo "{\"status\":\"healthy\",\"commit\":\"${COMMIT_SHA_ARG}\"}" > ./dist/health.json

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]