
var random = require("../data/random");
var random2 = require("../data/random2");



module.exports = function(app) {
    

    app.get("/api/random", function(req, res) {
        res.json(random);
    });

    app.get("/api/random2", function(req, res) {
        res.json(random2);
    });

    app.post("/api/matchfriend", function(req, res) {

        // normally a function


    });


};