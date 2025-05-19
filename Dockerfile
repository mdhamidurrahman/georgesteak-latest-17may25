# Step 1: Build the app
FROM node:lts-slim AS builder

WORKDIR /app

# Copy only package files first (for caching install step)
COPY package*.json ./

RUN npm install --legacy-peer-deps

# Now copy the rest of the source code
COPY . .

# Build the Vite app
RUN npm run build

# Copy the test text file as testfile.txt
COPY testfile.txt ./dist/

# Step 2: Serve with a lightweight static file server (like nginx or http-server)
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom nginx config (skip this unless needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
