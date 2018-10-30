var db = require('../db/');

module.exports = {
  messages: {
    get: function () {
      const sql = 'SELECT * FROM messages';
      const connection = db.connection;
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.log(error);
        }
        console.log(results);
      })
      connection.end();
    }, // a function which produces all the messages
    post: function () {
      const message = "INSERT INTO messages (MESSAGE_TEXT, ROOMNAME) VALUES ('Women like you can never change!', 'main')";
      const connection = db.connection;
      connection.query(message, (error, results, fields) => {
        if(error){
          return console.log(error)
        }
        console.log('Rows Affected: ', results.affectedRows)
      });

      connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      const sql = 'SELECT * FROM users';
      const connection = db.connection;
      connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.log(error);
        }
        console.log(results);
      });
      connection.end();
    },
    post: function () {
      const users = "INSERT INTO users (USERNAME) VALUES ('Toby')";
      const connection = db.connection;
      connection.query(users, (error, results, fields) => {
        if(error) {
          return console.log(error)
        }
        console.log('Rows Affected: ', results.affectedRows)
      });
      connection.end();
    }
  }
};

// module.exports.users.get();
// module.exports.users.post();