const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route imports
const todo = require("./routes/todo.route");

app.use("/api/v1", todo);

module.exports = app;
