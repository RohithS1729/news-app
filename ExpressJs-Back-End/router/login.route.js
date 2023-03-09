const route=require('express').Router()
const {loginController}=require("../controller/controller.js")

route.post('/',loginController)


module.exports=route