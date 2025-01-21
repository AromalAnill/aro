const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken");
const Cart = require('../models/cartSchema');

const userController = { 
 register: asyncHandler(async (req,res) => {
      console.log("Running");
      
    
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

const token = jwt.sign(payload,process.env.JWT_SECRECT_KEY)
res.cookie("token",token,{

      maxAge:2*24*60*60*1000,
      httpOnly:true,
      secure:false,
      sameSite:"none"
})

res.send("User succesfully registerd and login")

}),

login:asyncHandler( async(req,res)=>{

      const{ email , password} = req.body
      if(!email||!password){
            throw new Error("Enter Email & Password")
      }


      const userFound= await User.findOne({email})
      if(!userFound){
            throw new Error(" User Not Found")
      }

      const  comparedPassword= await bcrypt.compare(password,userFound.password)
      if (!comparedPassword){
            throw new Error("incorrect password")
      }

      const payload={
            email:userFound.email,
            id:userFound._id,
            name:userFound.username
      }

      const token = jwt.sign(payload,process.env.JWT_SECRECT_KEY)
      res.cookie("token",token,{
          maxAge:2*24*60*60*1000,
          httpOnly:true,
          secure:false,
          sameSite:'none'  
      })

      // res.send( "User Logined Successfully")
     return res.json({
      token,
      message:"user Logined succesfully"
     })


}),

logout:asyncHandler(async(req,res)=>{
          
          res.clearCookie("token")
          res.send("User Logouted Suceesfully")
  
      }),


viewCart:asyncHandler(async(req,res)=>{
      const {product_id}=req.params
      const cartAdded = await Cart.find({product_id}).populate("user_id","name")
      console.log();
      
}),




// --------------------------------------------------------------------------------------------
update_with_mail: asyncHandler(async (req, res) => {
      const { email, username, phone, address, password } = req.body;
     

      const userFound= await User.findOne({email})
      if (!userFound) {
        throw new Error("User not found")
      }

      if (username) userFound.username = username;
      if (phone) userFound.phone = phone;
      if (address) userFound.address = address;

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        userFound.password = hashedPassword;
      }

      const updatedUser = await userFound.save();
      if (!updatedUser) {
        throw new Error(" Failed to update user")
      }


     
      res.send("Updated successfully")

     
    }),
    
    update:asyncHandler(async(req,res) => {
     
      const {email} = req.body
      const userFound = await User.findOne({email})
      if(!userFound)
      throw new Error("user doesn't exists")

    
      const userData = {
        "fullname": req.body.fullname,
        "username": req.body.username,
        "phoneno": req.body.phoneno,
        "password": req.body.password,    
      }
 
   const updateUser =  await User.updateOne(userData)
   if(!updateUser){
    throw new Error("User not updated")
   }
   res.send("User updated successfully")
   console.log("updated user");
   

    })



}

module.exports = userController