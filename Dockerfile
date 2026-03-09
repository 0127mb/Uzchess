FROM node:25-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
FROM node:25-alpine
WORKDIR /app
COPY package.json ./
RUN npm i -g pnpm
RUN pnpm install --prod
COPY --from=build /app/dist /app/dist
EXPOSE 3004
CMD ["node", "dist/main.js"]