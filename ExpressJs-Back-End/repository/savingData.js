const savingData=async(data,res)=>{
    try{
        let response=await data.save()
        return {
            msg:'posted',
            id:response._id
        }
    }catch(err){
        return {
            msg:"error while saving data",
            error:err
        }
    }
    
    // data.save((err1,data1)=>{
    //     if(err1){
    //         res.send(err1)
    //     }else{
    //         res.send({
    //             msg:'posted',
    //             id:data1._id
    //         })
    //     }
    // })
}
module.exports=savingData