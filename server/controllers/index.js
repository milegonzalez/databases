var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // var params = [req.body[text], req.body[username], req.body[roomname]]
      // console.log(req.body)
      models.messages.get((error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          console.log('this is results GET', results)

          res.status(200).json({ results: results });
          // console.log('results ===========================>' ,results)
          // res.status(200).json(results);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          console.log('this is results POST', results)
          res.status(201).json( {results: results });
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
          res.status(201).json({ results: results });
        }
      })
    }
  }
};


module.export = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
         res.sendStatus(404)
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = req.body;
      // need to fix this. its not working
      // console.log(params.MESSAGES_TEXT)
      models.messages.post(params, (err, results) => {
        if (err) {
          res.sendStatus(404)
        } else {
          res.json(results);
        }
      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = req.body;
      // need to fix this. its not working
      // console.log(params.MESSAGES_TEXT)
      models.users.post(params, (err, results) => {
        if (err) {
          res.sendStatus(404)
        } else {
          res.json(results);
        }
      });
    }
  }
}