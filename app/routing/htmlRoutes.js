//packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


module.exports = function(app) {

    //use entire public directory so that you can retrieve the css files
    app.use(express.static(path.join(__dirname, "/../public")));


    //routes
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));


    });

    //routes
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));

    });




};
