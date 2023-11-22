// these are important
const express = require("express");
const app = express();
// useful for navigation
const path = require("path");

// use to serve the css and js scripts to templates
app.use(express.static(path.join(__dirname,"assets")));

// used to create ejs templates
app.set('view engine','ejs');
// templates in views directory
app.set("views", path.join(__dirname,"/views"));

// for a given route, render a certain template
app.get('/', (req, res) => {
    res.render("home");
});

// can get info from route/request, send it to ejs template
app.get('/:topic', (req, res) => {
  const { topic } = req.params;
  res.render("topic",{topic});
});

// port of listening
app.listen(3000,() => {
    console.log("the post id is 3000");
});

/* ejs things:
 * <%= %> value inside will be evaluated and rendered
 * <% %> used to encase loops and conditionals, control elements
 * <%- %> used for unescaped stuff (show up as html). include
 * include: partial templates such as headers/footers/nav
 */
