const express = require ('express')
const app = express()
require("dotenv").config()
const connectDB = require('./database/database')
const errorHandler = require('./middleware/errorhandiler')
const cookieParser = require('cookie-parser')
const router = require('./routes')
const cors = require("cors")
const corsOptions = require('./middleware/cors')
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(router)
app.use(errorHandler)


app.get('/',(req,res)=>{ 
    res.send("project is running ") 
})



app.listen(process.env.PORT,()=>{
    console.log( "Click here to run "+`http://localhost:${process.env.PORT}`);
    
})