
# Use a lightweight Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation

COPY dist ./dist
COPY package*.json ./
COPY index.js ./
COPY vite.config.js ./

# Install app dependencies

RUN npm install --silent

# Copy the rest of the app source code

# COPY . .

# Expose port 3000 (default React dev server port)
EXPOSE 8080

# Start the app using npm start (modify if your start script is different)
# CMD [ "node", "index.js" ]
CMD ["npm", "run", "preview"]