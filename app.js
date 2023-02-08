// control website
const express = require("express");
const app = express();
const port = 3000;
// after npm install ejs
app.set("view engine", "ejs");
// make (images, CSS files, audios,) static
app.use(express.static("public"));
// make post request
app.use(express.urlencoded({ extended: true }));
// import all-articles PATH file
const allArticlesRouter = require("./routes/all-articles");

// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// connect to mongoose
const mongoose = require("mongoose");

// use moongose to connect to mongo database
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.7eiw7ym.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.redirect("/all-articles");
});

app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { myTitle: "ADD-NEW-ARTICLE" });
});

// all-articles PATH
app.use(allArticlesRouter);

//  404
app.use((req, res) => {
  res.status(404).send("Sorry cant find that!");
});
