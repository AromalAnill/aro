const asyncHandler = require("express-async-handler")
const Cart = require("../models/cartSchema")
const User = require("../models/userSchema")
const Product = require("../models/productShema")

const cartController ={


addCart:asyncHandler(async(req,res)=>{

    

// -----------------------------------------------------------------
    // const userid = req.user.id
    // console.log("userid",userid);
    
    // if(!userid){
    //   throw new Error(" User id is not found in cart")
    // }
// -------------------------------------------------------------------   


  const {userId} = req.params
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const { productId}= req.body
    if(!productId){
        
        throw new Error("incomplete data")
    }

    // -----------------------------------------------------------------
   
    const product = await Product.findById(productId)
    
    if (!product) {
      throw new Error("product not found");
    }
    // -----------------------------------------------------------------

     const createCart=await Cart.create({
      productId,
        product_name:product.product_name ,
        // quantity,
        price:product.price,
        // total_price,
        user_id:userId,
        delivery_address:user.address

     })
    if(!createCart){
        throw new Error(" Product not added to cart due to error")
    }
    res.send(createCart)


    
}),



removeCart:asyncHandler(async(req,res)=>{
    
  const {cart_id}=req.body
  const deleteCart=await Cart.findByIdAndDelete(cart_id)
  if(!deleteCart){
    throw new Error("cart dont deleted due to error")
  }
  res.send("cart removed succesfully")

}),

userCart:asyncHandler(async(req,res)=>{


  // const userid = req.user.id

  const {userId} = req.params

  const userCarts=await Cart.find({user_id:userId})
  if(!userCarts){
    throw new Error("this user has no items in cart")

  }
  res.send(userCarts)

})

}


module.exports= cartController


