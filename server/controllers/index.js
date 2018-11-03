var models = require('../models');
// var bluebird = require('bluebird');

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       Message.findAll({ include: [User] })
//         .complete(function (err, results) {
//         if (err) {
//           res.sendStatus(404);
//         } else {
//           res.json(results);
//         }
//       });
//     },
//     post: function (req, res) {
//       User.findOrCreate({ username: req.body[username] })
//         .complete(function (err, user) {
//           var params = {
//             text: req.body[text],
//             userid: user.id,
//             roomname: req.body[roomname]
//           };
//           Message.create(params)
//             .complete(function (err, results) {
//               res.sendStatus(201);
//             })
//         })
//     }
//   },
//   users: {
//     get: function (req, res) {
//       Message.findAll({ include: [User] })
//         .complete(function(err, results) {
//         if (err) {
//           res.sendStatus(404);
//         } else {
//           res.json(results);
//         }
//       });
//     },
//     post: function (req, res) {
//       User.create({username: req.body[username]})
//             .complete(function (err, results) {
//               res.sendStatus(201);
//             })
//         }
//     }
//   };


//before ORM
module.exports = {
  messages: {
    get: function (req, res) {
      // var params = [req.body[text], req.body[username], req.body[roomname]]
      // console.log(req.body)
      models.messages.get((error, results) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.status(200).json({ results: results });
        }
      });
    },
    post: function (req, res) {
      console.log('this is req.body', req.body);
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
          res.status(200).json({ results: results });
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