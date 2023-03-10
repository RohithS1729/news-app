const {createPostRepo,getPostRepo,updatePostRepo,deletePostRepo}=require('../repository/repository')

const axios =require("axios")
const UserData = require("../Modals/userData")
const savingData=require('../repository/savingData')



const  loginService=async(req,res)=>{
    try{
        let response=await UserData.findOne({username:req.body.username})
        // return response
        // console.log(response)
        if(!response){
            return {
                msg:'No such user found, please sign up!!'
            }
        }else if(response.comparePassword(req.body.password)){
            return {
                msg:'logged in',
                userId:response._id,
                userName:response.username
            }
        }else{
            return {
                    msg:'wrong password or username'
                    
                    
                }
        }



    }
    catch(err){
        return {
            msg:'error ================= in loginRepo file',
            error:err
        }
    }

    
}
const SignUpService=async(req,res)=>{
    try{
        let response=await UserData.findOne({username:req.body.username})
        if(response){
            return {
                msg:'user already exists'
            }
          
        }else{
            const newUser= new UserData(req.body);
            newUser.password=newUser.generateHash(req.body.password);

            let saving=await savingData(newUser)
            return saving
            
        }
    }catch(err){
        return {
            msg:'error ================= in signUpRepo file',
            error:err
        }
    }


}
const topicService=async(req,res)=>{
    
    try{
        let qValue=req.query.topic
        console.log(qValue)
        let limit=req.query.limit
        let skip=req.query.skip
        let url;
        if(req.query.topic==='techcrunch'){
            // url=`https://newsapi.org/v2/everything?sources=techcrunch&from=2023-02-09&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`
            url=`https://newsapi.org/v2/everything?sources=techcrunch&from=2023-03-09&to=2023-03-09&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`

            
        }else if(req.query.topic==='wallstreets'){
            // url=`https://newsapi.org/v2/everything?domains=wsj.com&from=2023-02-09&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`
            url=`https://newsapi.org/v2/everything?domains=wsj.com&from=2023-03-09&to=2023-03-09&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`

        }
        else{
            // url=`https://newsapi.org/v2/everything?q=${qValue}&from=2023-02-09&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`
            url=`https://newsapi.org/v2/everything?q=${qValue}&from=2023-03-09&to=2023-03-09&sortBy=popularity&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`
            

        }
        
        let response=await axios.get(url)
        return response.data.articles
        
    }catch(err){
        return{
            msg:'error'+err
        }
    }
}

const homeService=async(req,res)=>{
    try{
        // let qValue=req.query.topic
        let limit=req.query.limit
        let skip=req.query.skip
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=general&from=2023-02-10&sortBy=publishedAt&apiKey=${process.env.NEWS_KEY}&pageSize=${limit}&page=${skip}&language=en`
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=general&from=2023-02-10&sortBy=publishedAt&apiKey=d6e6fbf881d94e48893bea73813a2d08&pageSize=${limit}&page=${skip}&language=en`
        console.log('here')
        let response=await axios.get(url)
        console.log(response)
        // let response={
            
        // }
        return response.data.articles
    }catch(err){
        

        return {
            msg:'error'+err
        }
    }
}
//==========================
const createPostService=async(req,res)=>{
    try{
        let response=await createPostRepo(req,res)
        return response

    }catch(err){
        res.send({
            msg:'error in Service'+err
        })
    }
}
const getPostService=async(req,res)=>{
    try{
        let response=await getPostRepo(req,res)
        return response

    }catch(err){
        res.send({
            msg:'error in Service'+err
        })
    }
}
const updatePostService=async(req,res)=>{
    try{
        let response=await updatePostRepo(req,res)
        return response

    }catch(err){
        res.send({
            msg:'error in Service'+err
        })
    }
}
const deletePostService=async(req,res)=>{
    try{
        let response=await deletePostRepo(req,res)
        return response

    }catch(err){
        res.send({
            msg:'error in Service'+err
        })
    }
}
module.exports={
    loginService,topicService,homeService,SignUpService,
    createPostService,getPostService,updatePostService,deletePostService
}