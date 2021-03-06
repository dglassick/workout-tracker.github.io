const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//routes to load exercise and stats html
require('./routes/api.js')(app)
require('./routes/html.js')(app)

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
  console.log('click here', href='http://localhost:9000');
});