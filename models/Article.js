var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String
    
  },
  // `link` is required and of type String
  link: {
    type: String
    
  },

  image: {
    type: String
    
    
  },

  description: {
    type: String
    
  },
  saved: { 
    type: Boolean,
    default: false

  },


  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
  
});


var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
