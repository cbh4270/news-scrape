var db = require("../models");

module.exports = function (app) {
    app.put ("/saved/:id", function (req,res){
        db.Article.update({_id:req.params.id},{saved:true})
        .then(function(results){
            res.json(results)
        })
    })
}