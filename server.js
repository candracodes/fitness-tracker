// Require necessary packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); // not sure if I need this yet

// Establish local port
const PORT = process.env.PORT || 3000;

// Create Express app
const app = express();

// Establish middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Create mongoose database connection
// TODO: Check with tutor to make sure this looks right (make sure the server matches what's in the seed file)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Establish API routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// TODO: Notes from session with David:
/* 
Mongo is an always running server that's listening and waiting for commands (unlike MySQL).
You have to initiate the Mongoose in order for things to be up and running without initial queries.
*/