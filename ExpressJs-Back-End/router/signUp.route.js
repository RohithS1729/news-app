const route=require('express').Router()
const {signUpController}=require("../controller/controller.js")

route.post('/',signUpController)


module.exports=route