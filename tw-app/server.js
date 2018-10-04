// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure middleware aka body-parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes
const routes = require("./routes");
app.use(routes);


// {========================================================}
// // for if we use Mongo/Mongoose
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tw-app";
// //Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to database
// mongoose.connect(
//     MONGODB_URI
//   );
// {========================================================}
//                      MONGO ABOVE ^^^^^
//                      MYSQL BELOW vvvvv
// {========================================================}
//   // For if we use mySQL/Sequelize
// var db = require("./models");
// var syncOptions = { force: false };
// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
//db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
  });
// });