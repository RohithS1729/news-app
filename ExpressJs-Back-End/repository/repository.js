const PostsData=require("../Modals/postData")
const cloudinary = require('cloudinary').v2


const savingData=require("./savingData")
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret,
        secure: process.env.SECURE
      });

const createPostRepo=async(req,res)=>{
    try{
        let obj={
            source:{id:null,name:req.query.name},
            author:req.query.author,
            title:req.query.title,
            description:req.query.description,
            content:req.query.content,
            userId:req.query.userId
        }
        let newPost= new PostsData(obj)
        let url=await posting(req)
        newPost.urlToImage=url
        let date= new Date().toISOString()
        newPost.publishedAt=date
        let saving=await savingData(newPost)
        
            
    
        return saving
        






    }catch(error){
        return error+'error in repo'
    }
}
const getPostRepo=async(req,res)=>{
    try{
        let response=await PostsData.find({userId:req.query.userId})
        console.log(response)
        return response
    }catch(error){
        return error+'error in repo'
    }
}
const updatePostRepo=async(req,res)=>{
    try{
        let response=await PostsData.findOneAndUpdate({_id:req.query.postId},{ $set: { "url" : `${req.body.UpdateValue}`}},{new: true})
       return response
   }catch(error){
       return error+'error in repo'
   }
}
const deletePostRepo=async(req,res)=>{
    try{
         let response=await PostsData.findOneAndDelete({_id:req.query.postId})

        return response
    }catch(error){
        return error+'error in repo'
    }

}


module.exports={createPostRepo,getPostRepo,updatePostRepo,deletePostRepo}

async function posting(req,res){
    
    const file=req.files.media;
    try{
        let response=await cloudinary.uploader.upload(file.tempFilePath)
        return response.url
    }catch(err){
        return err
    }
 
}