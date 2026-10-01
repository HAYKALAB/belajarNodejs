//core module
//file system

// const { error } = require('console')
const fs = require('fs')

//menuliskan string ke file(synchronous)
// try{
//     fs.unlink('data/tes.txt','hello world secara synchronous')
// }catch(e){
//     console.log(e)
// }

//menuliskan string ke file (asynchronous)

// fs.writeFile('data/tes.txt',"hello world secara asynchronous", (err) => {
//     console.log(err)
// })

// membaca isi file (syncronous)

// const data = fs.readFileSync("./data/tes.txt","utf-8")

// console.log(data)

// membaca isi file (asynchronous)

// fs.readFile('./data/tes.txt',"utf-8",(error,data)=>{
//     if (error) throw  error;
//     console.log(data)
// })

// readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama anda:", (nama) => {
  rl.question("masukkan no telepon anda:", (telepon) => {
    const contact = {nama,telepon}
   const file =  fs.readFileSync('./data/contacts.json',"utf-8")
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync("./data/contacts.json",JSON.stringify(contacts))
    console.log("terima kasih sudah memasukkan data")
    rl.close();
  });
});
