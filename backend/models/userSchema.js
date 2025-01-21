const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true 

    },
    
    username:{
        type:String,
        trim:true,
        min:[3,"Name is too Short"],
        max:[15,"Name is too Long"],
        required:true
    },

    phone:{
        type:String,
        trim:true,
        min:[10, "enter a valid phone number"],
        // max:[10,"enter a valid phone number"],
        required:true,
        unique:true

    },

    address:{
        type:String,
        trim:true,
        min: 10,
        max: 100,

    },
    password:{
        type:String,
        min:[8,"enter a valid password"],
        required:true,
        trim:true

    }
},
{
timestamps:true
})

const User = mongoose.model("User",userSchema)

module.exports = User