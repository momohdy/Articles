const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

// define the Schema (the structure of the article)
const articleSchema = new Schema({
  title: String,
  summary: String,
  body: String,
});

// Create a model based on that schema
const Article = mongoose.model("Article", articleSchema);

// export the model
module.exports = Article; 