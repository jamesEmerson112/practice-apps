const db = require('./db.js');

const post = (params) => {
  let queryStr = `INSERT INTO user_info (username, password, email, session_id) VALUES(?, ?, ?, ?)`;
  return db.queryAsync(queryStr, params).catch((error) => console.log(error));

}