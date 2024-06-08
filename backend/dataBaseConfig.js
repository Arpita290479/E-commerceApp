const mysql = require('mysql')

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: "Arpita1234!",
    database:'e-commerce-MERN'
})

module.exports = connection




