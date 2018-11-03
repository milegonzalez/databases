// var Sequelize = require('sequelize');
// var db = new Sequelize('ormchat', 'root', 'WallacePennyToby');

// var User = db.define('User', {
//   username: Sequelize.STRING
// });

// var Message = db.define('Message', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   username: Sequelize.STRING,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// module.exports = {
//   messages: {
//     post: function (body, cb) {
//       Message.sync()
//       .then(function (){
//         return Message.create({ username : JSON.stringify(body.username), text: JSON.stringify(body.text), roomname: JSON.stringify(body.roomname)})
//       })
//       .then(function () {
//         return Message.findAll();
//       })
//       .then(function (messages) {
//         cb(null, messages);
//         // db.close();
//       })
//       .catch(function (err) {
//         cb(err, null);
//         console.log(err);
//         // db.close();
//       })
//     },
//     get: function (){

//     }
//   },
//   users: {
//     post: function(body, cb) {
//       User.sync()
//         .then(function() {
//           return User.create({ username: JSON.stringify(body.username) });
//         })
//         .then(function() {
//           return User.findAll();
//         })
//         .then(function(users) {
//           users.forEach(function(user) {
//             console.log(user.username + ' exists');
//           });
//           cb(null, users);
//           // db.close();
//         })
//         .catch(function(err) {
//           cb(err, null);
//           console.error(err);
//           // db.close();
//         });
//     },
//     get: {}
//   }
// };


//original code:
var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      let connection = db.connection;
      let queryStr = 'SELECT * from MESSAGES';
      connection.query(queryStr, (err, results) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      })
    },
    post: function (text, cb) {
      let userName = text.username;
      let textMessage = text.MESSAGE_TEXT;
      let roomName = text.roomname;
      var param = [textMessage, roomName, userName]
      // console.log(userName, textMessage, roomName)
      // const queryStr = `INSERT INTO messages (MESSAGE_TEXT, CREATED_AT, ROOMNAME, username) VALUES ('${textMessage}', NOW(), '${roomName}', '${userName}')`;
      const queryStr = `INSERT INTO messages (MESSAGE_TEXT, CREATED_AT, ROOMNAME, username) VALUES (?, NOW(), ?, ?)`;
      console.log(queryStr);
      let connection = db.connection;
      connection.query(queryStr, param, (err, results) => {
       console.log('err -------> ', err, 'results --------> ', results)
        if (err) {

          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  },
  users: {
    get: function (cb) {
      let connection = db.connection;
      let queryStr = 'SELECT * from USERS';
      connection.query(queryStr, (err, results) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      })
    },
    post: function (params, cb) {
      var username = params.username;
      console.log(username, '<< ---------------------------- username')
      let connection = db.connection;
      let queryStr = `INSERT INTO USERS (username) VALUES ('${username}')`;
      connection.query(queryStr, params, (err, results) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  }
}