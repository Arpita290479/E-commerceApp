const db  = require('../dataBaseConfig.js')

exports.saveUser = (req, res)=>{
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let value = [[username, email, password]]

    let sql = 'insert into user(username, email, password) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("product saved")
        }
    })
    
}


exports.userLogin = (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let sql = 'select * from user where username = ? and password = ?'
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err
        else {
            if (result.length > 0) {
                res.send(true)
            } else {
                res.send(false)
            }
        }
    })
}


exports.createClient = (req, res)=>{
    let username = req.params.username
    let clientTableQuery = `
CREATE TABLE IF NOT EXISTS ${username} (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255) NULL,
    productType VARCHAR(255) NULL,
    productRating VARCHAR(255) NULL,
    productPrice VARCHAR(255) NULL,
    productImages VARCHAR(255) NULL,
    PRIMARY KEY (id));
`
db.query(clientTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("cart table is craeted")
    }
})


}