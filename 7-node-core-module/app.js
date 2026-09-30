//core module
//file system

const { error } = require('console')
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

fs.readFile('./data/tes.txt',"utf-8",(error,data)=>{
    if (error) throw  error;
    console.log(data)
})