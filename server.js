const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://user:password1@ds023388.mlab.com:23388/heroku_nw1m5j4k", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
});