const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 80;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://heroku_0jpfz0mg:2eeo9kq3rloosub37cr4h6c4nl@ds159110.mlab.com:59110/heroku_0jpfz0mg", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});