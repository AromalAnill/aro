// database passwor d aromal1234

// mongodb+srv://aromal319193:aromal1234@cluster0.ca9mz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0






const express = require ('express')
const app = express()
require("dotenv").config()

const mongoose = require ("mongoose")

const connectDB  = async () => { 

    try{

        await mongoose.connect(process.env.MONGOOBG_DATABASE);

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
    console.log(`http://localhost:${process.env.PORT}/`);
    
})