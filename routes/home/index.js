const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "home";
  next();
});

router.get("/", (req, res) => {
  //   res.send("this is working dude!!");
  res.render("home/index");
});
router.get("/world", (req, res) => {
  // res.send("working");
  res.render("home/world");
});

module.exports = router;
