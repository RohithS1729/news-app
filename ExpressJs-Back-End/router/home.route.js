const route=require('express').Router()
const {homeController}=require("../controller/controller.js")

route.get('/',homeController)


module.exports=route