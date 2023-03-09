const route=require('express').Router()
const {createPostController,getPostController,updatePostController,deletePostController}=require("../controller/controller.js")

route.get('/',getPostController)
route.post('/',createPostController)
route.put('/',updatePostController)
route.delete('/',deletePostController)


module.exports=route