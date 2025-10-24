ARG NPM_REGISTRY=https://registry.npmmirror.com
ARG NEXT_FONT_GOOGLE_URL=https://fonts.googleapis.cn

FROM node:20-alpine AS deps
WORKDIR /app

ARG NEXT_FONT_GOOGLE_URL
ENV NEXT_TELEMETRY_DISABLED=1 \
  NEXT_FONT_GOOGLE_URL=${NEXT_FONT_GOOGLE_URL}

RUN npm config set registry ${NPM_REGISTRY}
RUN npm config set legacy-peer-deps true

COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app

ARG NEXT_FONT_GOOGLE_URL
ENV NEXT_TELEMETRY_DISABLED=1 \
  NEXT_FONT_GOOGLE_URL=${NEXT_FONT_GOOGLE_URL}

ARG NPM_REGISTRY
RUN npm config set registry ${NPM_REGISTRY}
RUN npm config set legacy-peer-deps true

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ARG NEXT_FONT_GOOGLE_URL
ENV NODE_ENV=production \
  NEXT_TELEMETRY_DISABLED=1 \
  PORT=3000 \
  NEXT_FONT_GOOGLE_URL=${NEXT_FONT_GOOGLE_URL}

ARG NPM_REGISTRY
RUN npm config set registry ${NPM_REGISTRY}
RUN npm config set legacy-peer-deps true

RUN addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001

COPY --chown=nextjs:nodejs --from=builder /app/public ./public
COPY --chown=nextjs:nodejs --from=builder /app/.next/standalone ./
COPY --chown=nextjs:nodejs --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
