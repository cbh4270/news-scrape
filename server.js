
var express = require("express");
// var bodyparser = require("body-parser");
var path = require("path");
var logger = require("morgan")
var mongoose = require("mongoose")
var axios = require("axios");
var cheerio = require("cheerio");


// Tells node that we are creating an "express" server
var app = express();

var db = require("./models");

var PORT = 3333;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// app.use(bodyParser.json());

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// to include css files

app.use(express.static(__dirname + "/app/public"));

//=============OR=================

app.use(express.static(__dirname + "/app/css"));


//===================POSSIBLE ADDITIONS==============================

//app.use(express.static(__dirname + "/app/data/images"));

// app.use(bodyParser.text());

// app.use(bodyParser.json({ type: "application/vnd.api+json" }));




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});