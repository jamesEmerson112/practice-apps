require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/user', (req, res) => {
  console.log('req.body ', req.body);

  // save the data to the query

  res.status(200).send(req.body);
})

const port = process.env.PORT;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
