const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        min:[3,"Name is too Short"],
        max:[15,"Name is too Long"],
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
        

    },

    phone:{
        type:Number,
        trim:true,
        min:[10, "enter a valid phone number"],
        max:[10,"enter a valid phone number"],
        required:true,
        unique:true

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

const  User=  mongoose.Model("User",userSchema)

module.exports = User