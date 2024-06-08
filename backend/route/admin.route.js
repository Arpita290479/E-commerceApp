const express=require('express')
const adminController=require('../controller/admin.controller.js')
const router=express.Router()


router.post('/adminLogin',adminController.saveData)
router.post('/logindata',adminController.adminLogin)

module.exports=router





