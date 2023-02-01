const express = require("express");
const router = express.Router();
// import articleController 
const articleController = require("../controllers/articleController")

router.get("/all-articles", articleController.article_index_get);

// post request and save data
router.post("/all-articles", articleController.article_post);

// get object by ID

router.get("/all-articles/:id", articleController.article_details_get);

// Delete from database
router.delete("/all-articles/:id", articleController.article_delete);

module.exports = router;
 