FROM mhart/alpine-node:6.4.0
MAINTAINER cntmedia <cnt@cntmedia.com>

# create app directories
RUN mkdir -p /var/www/html/app
WORKDIR /var/www/html/app


# bundle app source
COPY . /var/www/html/app

# install app dependencies
COPY ./app/package.json /var/www/html/app/
RUN cd /var/www/html/app/ && npm install



EXPOSE 8080
RUN npm install -g node-google-apps-script
CMD [ "npm", "start" ]
