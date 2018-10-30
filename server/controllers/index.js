var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request and result: ', req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

//
/*
exports.requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode = 200;
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'text/plain';

  if (request.url === '/classes/messages') {
    headers['Content-Type'] = 'application/json';

    if (request.method === 'GET') {
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(savedMessages));

    } else if (request.method === 'OPTIONS') {
      response.writeHead(statusCode, headers);
      response.end();

    } else if (request.method === 'POST') {
      let statusCode = 201;
      request.on('data', message => {
        savedMessages.results.push(JSON.parse(message));
      })
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(savedMessages));

    } else if (request.method === 'DELETE') {
      let statusCode = 405;
      response.writeHead(statusCode, headers);
      response.end();
    }
  } else {
    let statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }
};
*/