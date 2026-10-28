const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3001;

// gunakan ejs
app.set("view engine", "ejs");

// third - party middleware
app.use(expressLayouts);

//built in middleware
app.use(express.static("public"));

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
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "detail contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.send(`eror kontol`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
