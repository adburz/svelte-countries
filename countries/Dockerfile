FROM node:18.13.0
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build 
ENV PORT 5050
EXPOSE 5050
CMD ["node", "build"]