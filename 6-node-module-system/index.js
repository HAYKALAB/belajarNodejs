// console.log("haykal")


// const nama = "haykal";
// const cetakNama = (nama) => `hi, nama saya ${nama}`;
// console.log(cetakNama(nama))
// const fs = require('fs')  //core module
// const sayHello = require("./coba") //local module
// const moment = require('moment') // third party module atau npm module akan ada di node_modules

const coba = require("./coba")
console.log(coba.sayHello("ahmad"),coba.PI, coba.siswa.cetakSiswa(),new coba.Orang())
