const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(`CREATE DATABASE IF NOT EXISTS checkout`)
    .then(() => {
      db.queryAsync(`use checkout`);
    })
    .then(()=> {
      return db.queryAsync(
        `CREATE TABLE IF NOT EXISTS user_info (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          username varchar(30) NOT NULL,
          password varchar(40) NOT NULL,
          email varchar(50) NOT NULL,
          session_id varchar(60) NOT NULL
          )`
      )
    })
  )
  .catch((err) => console.log(err));


  let queryStr = `INSERT INTO user_info (username, password, email, session_id)
  VALUES (?, ?, ?, ?)`
module.exports = db;
