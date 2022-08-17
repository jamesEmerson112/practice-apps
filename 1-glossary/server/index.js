require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

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
