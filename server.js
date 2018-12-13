const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, resp, next) => {
  const now = new Date().toString();
  const log = `${now} ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile("server.log", log + "\n", err => {
    console.log("Unable to log the message");
  });
  next();
});

app.use((req, resp, next) => {
  res.render("mainteneace.hbs");
});
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "home page",
    welcomeMessage: "Hello stranger"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "about page"
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
