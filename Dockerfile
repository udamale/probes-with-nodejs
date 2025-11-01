FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
