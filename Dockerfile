FROM node:alpine3.11

WORKDIR /app
EXPOSE 3000
# ENTRYPOINT []
CMD ["npm", "run", "start:dev"]

COPY package* ./
RUN npm install
COPY . .
