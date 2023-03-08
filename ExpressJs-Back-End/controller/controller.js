const {loginService}=require("../services/service.js")

const loginController=(req,res)=>{
    try{
        loginService(req,res)

    }catch(err){
        res.send({
            msg:'error'+err
        })
    }
}

module.exports={
    loginController
}