FROM node:18-slim

WORKDIR /app/docs

# Copy package.json and yarn.lock first for better caching
COPY docs/package.json docs/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the docs directory
COPY docs/ ./

# Build the Docusaurus site
RUN yarn build

# Expose the default Docusaurus port
EXPOSE 3000

# Start the development server
CMD ["yarn", "start", "--host", "0.0.0.0"]