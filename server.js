const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "home page",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Hello stranger"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "about page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "error"
  });
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
