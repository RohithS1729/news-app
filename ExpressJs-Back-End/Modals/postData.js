const mongoose = require("mongoose");
const Schema= mongoose.Schema

const PostsData=new Schema({
    
    source:Object,
    author:String,
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    content:String,
    publishedAt:String,
    userId:String
})


module.exports=mongoose.model('posts-datas',PostsData)

