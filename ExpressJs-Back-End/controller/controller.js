const {loginService,topicService,homeService,SignUpService,
    createPostService,getPostService,updatePostService,deletePostService}=require("../services/services")

const loginController=async(req,res)=>{
    try{
        let response=await loginService(req,res)
        res.send(response)

    }catch(err){
        res.send({
            msg:'error'+err
        })
    }
}
const signUpController=async(req,res)=>{

    try{
        let response=await SignUpService(req,res)

        res.send(response)

    }catch(err){
        res.send({
            msg:'error'+err
        })
    }

}
const topicController=async(req,res)=>{
    try{
        let response=await topicService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}
const homeController=async(req,res)=>{
    try{
        let response=await homeService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}
//========================================================
const createPostController=async(req,res)=>{
    try{
        let response=await createPostService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}
const getPostController=async(req,res)=>{
    try{
        let response=await getPostService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}
const updatePostController=async(req,res)=>{
    try{
        let response=await updatePostService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}
const deletePostController=async(req,res)=>{
    try{
        let response=await deletePostService(req,res)
        res.send(response)
    }catch(err){
        res.send({
            msg:'error in controller'+err
        })
    }
}

module.exports={
    loginController,topicController,homeController,signUpController,
    createPostController,getPostController,updatePostController,deletePostController
}