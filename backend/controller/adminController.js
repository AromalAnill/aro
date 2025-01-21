const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const Product = require("../models/productShema");


const adminController = {

viewUser:asyncHandler(async(req,res)=>{

    const allUsers = await User.find()
    if(!allUsers){
        throw new Error("Error in fetching users")
    }
    res.send(allUsers)


}),


deleteUser:asyncHandler(async(req,res)=>{
    const {id} =req.body
    
    if(!id){
        res.send("id is required")
    }
    const deleteUser= await User.findByIdAndDelete(id)
    
    if(!deleteUser){
        throw new Error(" user not deleted due to error")
    }
    res.send("user deleted successfullu")
    }),

deleteProduct:asyncHandler(async(req,res)=>{
    const {_id} =req.body
    if(!_id){
        throw new Error("enter the id")
    }
    const deleteProduct = await Product.findByIdAndDelete(_id)

    if (!deleteProduct){
        throw new Error("product is not deleted due to error")
    }
     res.send("product deleted successfully")

     
    }),
    adminAllproduct:asyncHandler(async(req,res)=>{
        const allProduct = await Product.find()
     if(!allProduct){
        throw new Error(" no products to show")
     }

       res.send(allProduct)
    })

}


module.exports = adminController