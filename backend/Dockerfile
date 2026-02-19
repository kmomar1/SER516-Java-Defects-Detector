FROM node:20-alpine

# Install git for cloning repos from backend
RUN apk add --no-cache git

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]
