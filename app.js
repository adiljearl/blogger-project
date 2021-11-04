const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars);
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", "handlebars");

const home = require("./routes/home/index");

app.use("/", home);

app.listen(5000, () => {
  console.log("working !!!");
});
