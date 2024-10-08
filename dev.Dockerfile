FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
   elif [ -f package-lock.json ]; then npm ci; \
   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
   else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
   fi

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY . .

CMD \
   if [ -f yarn.lock ]; then yarn dev; \
   elif [ -f package-lock.json ]; then npm run dev; \
   elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
   else npm run dev; \
   fi
