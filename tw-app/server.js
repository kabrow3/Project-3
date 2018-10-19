// Dependencies
const path = require('path');
const bodyParser = require('body-parser');
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const db = require("./models");
const routes = require("./routes");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

// Configure middleware aka body-parser for AJAX requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Passport
require("./config/passport/passport")
app.use(cors());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes
// app.use(routes);
require('./routes/registerUser')(app);
require('./routes/loginUser')(app);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));
}
// NODE_ENV=production node server.js


var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
  });
});