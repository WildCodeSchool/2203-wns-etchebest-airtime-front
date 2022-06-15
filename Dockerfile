FROM node:lts as dependencies
WORKDIR /airtime
COPY package*.json ./
RUN npm install
COPY ./ ./

# FROM node:lts as builder
# WORKDIR /airtime
# COPY . .
# COPY --from=dependencies /airtime/node_modules ./node_modules
# RUN npm run build

# FROM node:lts as runner
# WORKDIR /airtime
# ENV NODE_ENV production
# # If you are using a custom next.config.js file, uncomment this line.
# # COPY --from=builder /airtime/next.config.js ./
# COPY --from=builder /airtime/public ./public
# COPY --from=builder /airtime/.next ./.next
# COPY --from=builder /airtime/node_modules ./node_modules
# COPY --from=builder /airtime/package.json ./package.json


EXPOSE 3000
CMD ["npm", "run", "dev"]