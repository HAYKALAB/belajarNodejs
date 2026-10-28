const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require('morgan')
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third - party middleware
app.use(expressLayouts);
app.use(morgan('dev'))


//built in middleware 
app.use(express.static('public'))
// application for middleware
app.use((req, res, next) => {
  console.log("time:", Date.now());
  next();
});



app.get("/", (req, res) => {
  const siswa = [
    {
      nama: "haykal",
      email: "ahmadalhaykal@gmail.com",
    },

    {
      nama: "dika",
      email: "dika@gmail.com",
    },
    {
      nama: "jibar",
      email: "jibar@gmail.com",
    },
  ];
  res.render("index", {
    nama: "haykal",
    title: "halaman home",
    siswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: " about",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `product ID : ${req.params.id} <br> Category ID : ${req.query.category}`,
  );
});

app.use("/", (req, res) => {
  res.send(`eror kontol`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
