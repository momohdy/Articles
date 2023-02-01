// to import articleSchema.js file
const Article = require("../models/articleSchema");


const article_index_get = (req, res) => {
  // to get objects from database , result = araay of objects from mongo database
  Article.find()
    .then((result) => {
      res.render("index", { myTitle: "HOME", arrArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const article_post = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((result) => res.redirect("all-articles"))
    .catch((err) => console.log(err));
};

const article_details_get = (req, res) => {
  // to get object from database , result = object inside mongo database
  Article.findById(req.params.id)
    .then((result) => {
      res.render("details", { myTitle: "ARTICLE DETAILS", objArticle: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const article_delete = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then((params) => {
      res.json({ mylink: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};
 
// export articleController
module.exports = {
  article_index_get,
  article_post,
  article_details_get,
  article_delete,
};
