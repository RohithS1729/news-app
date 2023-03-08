const router=require("express").Router()
const {loginController}=require("../controller/controller.js")


router.use("/login",loginController)
router.use("/home")
router.use("/article")
router.use("/")

module.exports=router