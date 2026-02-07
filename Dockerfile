# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Build arguments for environment variables
ARG VITE_API_URL=http://localhost:5012/api
ARG VITE_IMAGES_BASE_URL=http://localhost:5012

# Set environment variables for build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_IMAGES_BASE_URL=$VITE_IMAGES_BASE_URL

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production with nginx
FROM nginx:1.29.5 AS runtime

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
