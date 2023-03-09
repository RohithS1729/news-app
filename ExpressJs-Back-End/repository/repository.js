const PostsData=require("../Modals/postData")
const savingData=require("./savingData")
const createPostRepo=async(req,res)=>{
    try{
        let newPost= new PostsData(req.body)
        let date= new Date().toISOString()
        newPost.publishedAt=date
    
            
    
        let saving=await savingData(newPost)
        // let saving=await newBlog.save()
        return saving
    }catch(error){
        return error+'error in repo'
    }
}
const getPostRepo=async(req,res)=>{
    try{
        let response=await PostsData.find({userId:req.query.userId})
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