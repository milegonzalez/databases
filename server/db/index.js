var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  connection: mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'WallacePennyToby',
    database: 'chat'
  })
}

// module.exports.dbConnection.connect((error) => {
//   if (error) {
//     console.log('Error connecting to the database');
//   } else {
//     console.log('Connection established');
//   }
// });