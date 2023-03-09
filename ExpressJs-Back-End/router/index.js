const router=require("express").Router()
const topicRoute=require("./topic.route")
const homeRoute=require("./home.route")
const loginRoute=require("./login.route")
const signUpRoute=require("./signUp.route")
const createPostRoute=require("./createPost.route")


router.use("/login",loginRoute)
router.use("/home",homeRoute)
router.use("/signUp",signUpRoute)
router.use("/topic",topicRoute)
router.use("/createPost",createPostRoute)

module.exports=router