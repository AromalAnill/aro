const errorHandler = require('express-async-handler');
const User = require('../models/userSchema');
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")

const userController = { 
 register: errorHandler(async (req,res) => {
    
   const { email,username,phone,address,password}= req.body

   if (!email||!username||!phone||!address||!password)
   {
         throw new Error(" data incomplete plesase fill the required fields")

   }
const userFound = await User.findOne({email})
if (userFound){
      throw new Error("User alredy exist")
}

const hashedPassword= await bcrypt.hash( password,10)
if(!hashedPassword){
      throw new Error(" password not hashed")

}

const createUser= await User.create({

      email,
      username,
      phone,
      address,
      password:hashedPassword


})

if(!createUser){
      throw new Error("User Not Created")
}


const payload = {

      email:createUser.email,
      id:createUser._id
}

c







})

}

module.exports = userController