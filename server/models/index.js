var db = require('../db/');

module.exports = {
  messages: {
    get: function (cb) {
      const sql = 'SELECT * FROM messages';
      const connection = db.connection;
      connection.query(sql, (error, results) => {
        if (error) {
          cb(error);
        }
        cb(null, results);
        // console.log('this is results from models messages, get', results);
      })
    },

    post: function (text, cb) {
      let userName = text.username;
      let textMessage = text.message;
      let roomName = text.roomname;
      const query = `INSERT INTO messages (MESSAGE_TEXT, CREATED_AT, ROOMNAME, username) VALUES ('${textMessage}', NOW(), '${roomName}', '${userName}')`;
      const connection = db.connection;
      connection.query(query, (error, results) => {
        if (error) {
          cb(error)
        }
        cb(null, results);
        // console.log('Rows Affected: ', results.affectedRows);
      });
    }
  },

  users: {
    get: function (cb) {
      const sql = 'SELECT * FROM users';
      const connection = db.connection;
      connection.query(sql, (error, results) => {
        if (error) {
          cb(error);
        }
        cb(null, results)
        console.log(results);
      });
    },
    post: function (username, cb) {
      let userName = JSON.stringify(username.username);
      const users = `INSERT INTO users (USERNAME) VALUES (${userName})`;
      const connection = db.connection;
      connection.query(users, (error, results) => {
        if (error) {
          cb(error)
        }
        cb(null, results);
        // console.log('Rows Affected: ', results.affectedRows);
      });
    }
  }
};
