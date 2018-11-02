var Sequelize = require('Sequelize');
//instantiate a new sequelize, ('databaseName', 'username', 'password')
var orm = new Sequelize ('chatORM', 'milena', 'milena');

// this creates representation of the data
var User = orm.define('User', {
  username: Sequelize.STRING
});
var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;


//BEFORE
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// module.exports = {
//   connection: mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'milenita1809!',
//     database: 'chat'
//   })
// }


