CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  MESSAGE_TEXT VARCHAR (120),
  CREATED_AT DATETIME
);

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  USERNAME VARCHAR(30)
);

CREATE TABLE rooms (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ROOMNAME VARCHAR(30)
);

CREATE TABLE master_messages (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY(users) REFERENCES users(id),
  FOREIGN KEY(messages) REFERENCES messages(id),
  FOREIGN KEY(rooms) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

