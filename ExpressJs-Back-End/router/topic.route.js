const route=require('express').Router()
const {topicController}=require("../controller/controller.js")

route.get('/',topicController)


module.exports=route