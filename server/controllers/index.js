var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.status(200).json(results);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.status(201).json(results);
        }
      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get((error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.status(200).json(results);
        }
      });
  },
    post: function (req, res) {
      models.users.post(req.body, (error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.status(201).json(results);
        }
      })
    }
  }
};
