const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat folder data jika belum ada
const pathFolder = "./data";
if (!fs.existsSync(pathFolder)) {
  fs.mkdirSync(pathFolder);
}

//membuat file contacts.json jika belum ada
const pathFile = "./data/contacts.json";
if (!fs.existsSync(pathFile)) {
  fs.writeFileSync(pathFile, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama,email,noHp) => {
  const contact = { nama, email, noHp };
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  console.log("terima kasih sudah memasukkan data");
  rl.close();
};


module.exports = {tulisPertanyaan,simpanContact}
