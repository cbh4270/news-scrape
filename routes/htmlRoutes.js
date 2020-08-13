var path = require("path");


module.exports = function(app) {

    app.get("/page2", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/page2.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};