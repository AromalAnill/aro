const express = require ('express')
const app = express()
require("dotenv").config()

const mongoose = require ("mongoose")

const connectDB  = async () => { 

    try{

        await mongoose.connect(process.env.MONGODB_DATABASE);

        console.log("MongoDB connected")
    }
    catch (error){
        console.log(error);
        
    }
 };
 connectDB()




app.get('/',(req,res)=>{ 
    res.send("project is running")

})
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})