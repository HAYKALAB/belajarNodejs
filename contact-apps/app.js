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
}).demandCommand();

//menampilkan daftar semua nama & no hp contact

yargs.command({
 command: "list",
  describe: "menampilkan semua nama dan no hp",
   handler(){
    contacts.listContact();
   }
})

//menampilkan detail sebuah contact
yargs.command({
 command: "detail",
  describe: "menampilkan detail sebuah contact berdasarkan nama",
   builder:{
     nama:{
      describe: "nama lengkap",
      demandOption: true,
      type: "string"
    }
   },
   handler(argv){
    contacts.detailContact(argv.nama);
   }
})


//menghapus contact berdasarkan nama

yargs.command({
 command: "delete",
  describe: "menghapus contact berdasarkan nama",
   builder:{
     nama:{
      describe: "nama lengkap",
      demandOption: true,
      type: "string"
    }
   },
   handler(argv){
    contacts.deleteContact(argv.nama);
   }
})




yargs.parse();

// const contacts = require('./contacts')

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukkan nama anda:");
//   const email = await contacts.tulisPertanyaan("masukkan email anda:");
//   const noHp = await contacts.tulisPertanyaan("masukkan nomor hp  anda:");

//   contacts.simpanContact(nama,email,noHp)
// };

// main();
