const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const Schema= mongoose.Schema

const UserData=new Schema({
    
    username:String,
    password:String,
    // confirmPassword:String,
    email:String,
    role:String
})
UserData.methods.generateHash=(password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
UserData.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports=mongoose.model('user-datas',UserData)

