FROM node:12 as builder

# Create app directory
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "node", "." ]

FROM node:12-slim as package

# Create app directory
WORKDIR /src

COPY --from=builder /src .

RUN npm prune --production

EXPOSE 3000
CMD [ "node", "." ]


