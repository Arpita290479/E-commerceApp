const express = require('express')
const uploads = require('../multerConfig.js')
const router = express.Router()
const userController = require('../controller/user.controller.js')

router.post('/saveUser',userController.saveUser)
router.post('/userLogin', userController.userLogin)
router.get('/createClient/:username', userController.createClient)
module.exports = router