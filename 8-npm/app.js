const validator = require('validator');
const chalk = require("chalk")

console.log(validator.isEmail("haykal@gmail.com"))
console.log(validator.isMobilePhone("081234554","id-ID"))
console.log(validator.isNumeric("081234554"))

console.log(chalk.red.italic('hello world'));

const nama = "haykal";
const pesan = chalk `loremajf{bgGreen.black.strikethrough naaaf}afjajfajflafajajf nama saya: ${nama}`;
console.log(pesan)

