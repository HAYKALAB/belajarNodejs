const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
} = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express();
const port = 3001;

// gunakan ejs
app.set("view engine", "ejs");

// third - party middleware
app.use(expressLayouts);

//built in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
  cookie:{maxAge:6000},
  secret:'secret',
  saveUninitialized: true,
}))

app.use(flash());

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
    msg: req.flash('msg')
  });
});

//halaman form tambah data contact

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "form tambah data contact",
    layout: "layouts/main-layout",
  });
});

// proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("nama sudah di gunakan ");
      }
      return true;
    }),
    check("email", "email tidak valid").isEmail(),
    check("nohp", "nohp tidak valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const erors = validationResult(req);
    if (!erors.isEmpty()) {
      // return res.status(400).json({ erors: erors.array() });
      res.render("add-contact", {
        title: " form tambah data contact",
        layout: "layouts/main-layout",
        erors: erors.array(),
      });
    } else {
      addContact(req.body);
      //kirimkan flash message
      req.flash('msg','data contact berhasil di tambahkan')
      res.redirect("/contact");
    }
  },
);

//halaman detail contact
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
