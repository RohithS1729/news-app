const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
dotenv.config()
const app=express();
app.use(cors())
app.use(bodyParser.json())


//dbms
// mongoose.connect(process.env.CONNECTION_STRING);
// const db= mongoose.connection;
// db.on('error',()=>{console.log('did not connect to db')});
// db.on('open',()=>{console.log('started listening to db')});

app.get("/test",(req,res)=>{
    res.send("working")
})

app.listen(8000,()=>{
    console.log('listening')
})


//dd