function sayHello(nama) {
  return `Halo, nama saya ${nama}`;
}


const PI = 3.14;

const siswa = {
    nama: "haykal",
    umur: 16,
    cetakSiswa(){
        return `halo , nama saya ${this.nama} dan saya ${this.umur} tahun.`
    }
}

class Orang{
    constructor(){
        console.log('objek orang telah di buat')
    }
}

// module.exports.sayHello = sayHello;
// module.exports.PI = PI
// module.exports.Siswa = siswa
// module.exports.Orang = Orang


// module.exports = {
//     sayHello: sayHello,
//     PI: PI,
//     siswa: siswa,
//     Orang:Orang,
// }

module.exports = {sayHello,PI,siswa,Orang}