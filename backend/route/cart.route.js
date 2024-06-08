const express = require('express')
const uploads = require('../multerConfig.js')
const router = express.Router()
const cartController = require('../controller/cart.controller.js')

router.post('/saveCart/:login',uploads.single('productImages'), cartController.cartSave)

router.get('/getCart/:login', cartController.getCart)

router.delete('/deleteCart/:id/:login', cartController.deleteCart)
module.exports = router