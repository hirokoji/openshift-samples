from ubi8/nodejs-12:latest

COPY package.json .
RUN npm install --production

COPY * .
ENV PORT 8080
EXPOSE $PORT
CMD ['npm' 'start']
