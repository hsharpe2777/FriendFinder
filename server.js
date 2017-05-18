//packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// var htmlFile = require('../public/home.html');
// var friends = htmlFile.friends;

//set up express app
var app = express();
var PORT = 3000;

exports.app;


//Set up the Express app for handling data
app.use(bodyParser.json());
//security feature - sort of encrypts 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("lisetening on port: " + PORT);
});
