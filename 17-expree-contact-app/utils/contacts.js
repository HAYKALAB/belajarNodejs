const fs = require("fs");

//membuat folder data jika belum ada
const pathFolder = "./data";
if (!fs.existsSync(pathFolder)) {
  fs.mkdirSync(pathFolder);
}

// ambil semua data di contact.json
const loadContact = () => {
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

//cari contact  berdasarkan nama

const findContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase(),
  );
  return contact
};

//membuat file contacts.json jika belum ada
const pathFile = "./data/contacts.json";
if (!fs.existsSync(pathFile)) {
  fs.writeFileSync(pathFile, "[]", "utf-8");
}

module.exports = { loadContact, findContact };
