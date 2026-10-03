const contacts = require('./contacts')


const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan nama anda:");
  const email = await contacts.tulisPertanyaan("masukkan email anda:");
  const noHp = await contacts.tulisPertanyaan("masukkan nomor hp  anda:");

  contacts.simpanContact(nama,email,noHp)
};

main();
