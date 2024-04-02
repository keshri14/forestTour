const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../views");
const partialPath = path.join(__dirname, "../partials");
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// Serve static files from the 'public' directory
app.use(express.static(publicDirectory));

// Set the correct MIME type for CSS files
// app.use("/styles", (req, res, next) => {
//   res.type("text/css");
//   next();
// });

// Routes
app.get("/", (req, res) => {
  res.render("jungle", {
    userName: "romit rana",
  });
});


app.get("/bird", (req, res) => {
  res.render("bird", {
    about: "this message is for temporary",
  });
});

app.get("/snake", (req, res) => {
  res.render("snake", {
    userName: "romit rana",
  });
});

app.get("/deer", (req, res) => {
  res.render("deer", {
    userName: "romit rana",
  });
});

app.get("/marine", (req, res) => {
  res.render("marine", {
    userName: "romit rana",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at port ${port}...`);
});
