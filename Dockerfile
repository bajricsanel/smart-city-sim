FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production
COPY tsconfig.json ./
COPY src ./src
EXPOSE 4000
CMD ["node", "--import", "tsx", "./src/index.ts"]