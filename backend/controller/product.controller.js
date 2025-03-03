const db  = require('../dataBaseConfig.js')

exports.saveProduct = (req, res)=>{
    let productBrand = req.body.productBrand
    let productType = req.body.productType
    let productRating = req.body.productRating
    let productPrice = req.body.productPrice
    let productImages = req.file.filename
    let value = [[productBrand, productType, productRating, productPrice, productImages]]

    let sql = 'insert into product(productBrand, productType, productRating, productPrice, productImages) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("product saved")
        }
    })
    
}




exports.getProduct = (req, res)=>{
    let sql = 'select * from product'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.getProductByBrand = (req, res)=>{
    let inp = req.params.inp
    let sql = 'select * from product where productBrand like ?'
    db.query(sql,["%" + inp + "%"], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteProduct = (req, res)=>{
    let id = req.params.id
    let sql = "delete from product where id = ?"
    db.query(sql, [id], (err,result)=>{
        if(err) throw err
        else{
            res.send("data deleted")
        }
    })
}

exports.getProductById = (req, res)=>{
    let id = req.params.id
    let sql = 'select * from product where id = ?'
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateProduct=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql='update product set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send("data updated")
        }
    })
}