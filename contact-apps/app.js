const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: "add",
  describe: "menambahkan contact baru",
  builder: {
    nama:{
      describe: "nama lengkap",
      demandOption: true,
      type: "string"
    },
     email:{
      describe: "email",
      demandOption: false,
      type: "string"
    },
     noHp:{
      describe: "nomor telepon",
      demandOption: true,
      type: "string"
    },

    
  },
  handler(argv){
    contacts.simpanContact(argv.nama,argv.email,argv.noHp)
  }
});

yargs.parse();

// const contacts = require('./contacts')

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukkan nama anda:");
//   const email = await contacts.tulisPertanyaan("masukkan email anda:");
//   const noHp = await contacts.tulisPertanyaan("masukkan nomor hp  anda:");

//   contacts.simpanContact(nama,email,noHp)
// };

// main();
