require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./db.js');

console.log('db ', db);
// const router = require('./routers/routers.js')

// add middle ware

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/****
 *
 *
 * Other routes here....
 *
 *
*/

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);

app.post('/word', (req, res) => {
  console.log(req.body);
  db.save(req.body);
  res.status(200).send('hello');
});

module.exports.app = app;