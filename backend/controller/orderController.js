const asyncHandler = require("express-async-handler")
const Order = require("../models/orderShema")
const Product = require("../models/productShema")
const User = require("../models/userSchema")
const Cart = require("../models/cartSchema")


const orderController ={

    placeOrder:asyncHandler(async(req,res)=>{

        const {userId} = req.params
        // console.log("userid",userId); 
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }

       const{productId,shiping_status,quntity} = req.body
        // const{productId} = req.body

        // if(!productId||!shiping_status){
        if(!productId){
            throw new Error("error in fetching product")
            // throw new Error("incomplete data product data or shiping data")
        }

        // if(!productId){
        
        //     throw new Error("error in fetching product")
        // }
    
        // -----------------------------------------------------------------
       
        const product = await Product.findById(productId)
        // console.log("productId",productId);
        
        if (!product) {
          throw new Error("product not found");
        }
            //   console.log("product",product);
              

        const createOrder=await Order.create({
            productId:productId,
            product_name:product.product_name ,
            user_name:user.username,
            price:product.price,
            quntity,
            shiping_status,
            address:user.address,
            user_id:userId,
            
        })

        if(!createOrder){
            throw new Error("Product not added to order due to error")
        }

         res.send(createOrder);
        //  console.log(createOrder);
         

    }),


    // buy_cart_Order:asyncHandler(async(req,res)=>{

    //     console.log("cart order is working");
        
    //     const {userId} = req.params
    //     console.log("userid",userId); 
    //     const user = await User.findById(userId);
    //     if (!user) {
    //       throw new Error("User not found");
    //     }

    //    const{cartId,shiping_status,quntity} = req.body
    //     // const{productId} = req.body

    //     // if(!productId||!shiping_status){
    //     if(!cartId){
    //         throw new Error("error in fetching cart")
    //         // throw new Error("incomplete data product data or shiping data")
    //     }

    //     // if(!productId){
        
    //     //     throw new Error("error in fetching product")
    //     // }
    
    //     // -----------------------------------------------------------------
       
    //     const cart = await Cart.findById(cartId)
    //     console.log("cartId",cartId);
        
    //     if (!cartId) {
    //       throw new Error("cartId not found");
    //     }
    //           console.log("cart",cart);
              

    //     const createOrder=await Order.create({
    //         // productId:productId,
    //         product_name:cart.product_name ,
    //         user_name:user.username,
    //         price:cart.price,
    //         quntity,
    //         shiping_status,
    //         address:user.address,
    //         user_id:userId,
            
    //     })

    //     if(!createOrder){
    //         throw new Error("Product not added to order due to error")
    //     }

    //      res.send(createOrder);
    //     //  console.log(createOrder);
         

    // }),
    buy_cart_Order: asyncHandler(async (req, res) => {
    
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
    
        const { cartData, shipping_status } = req.body

     if(!cartData){
        throw new Error("incomplete data ")

     }

    //  console.log("id from frond end",cartData.cartId);

     
       const cartId= cartData.cartId
    //   console.log("cart id destructured",cartId);
      
    
        // Fetch the cart
        const cart = await Cart.findById(cartId);
        console.log("cartId", cartId);
        
        if (!cart) {
            throw new Error("Cart not found");
        }
        // Create the order
        const createOrder = await Order.create({
            product_name: cart.product_name,  // Ensure cart is not null
            user_name: user.username,
            price:cartData.totalPrice,
            quantity:cartData.quantity,  // Make sure 'quantity' is provided in the request
            shipping_status,
            // totalprice:cartData.totalPrice,
            address: user.address,
            user_id: userId,
        });
    
        if (!createOrder) {
            throw new Error("Product not added to order due to error");
        }
          
    //   =====================================Delete Cart after Order===================================

            if(createOrder){
                console.log("helloooo");
                
                   const deleteCart=await Cart.findByIdAndDelete(cartId)
               if(!deleteCart){
               throw new Error("cart dont deleted due to error")
                }
                res.send("cart removed succesfully")
                 }

    //   ===============================================================================================
    
        res.send(createOrder);
        // console.log("new order ",createOrder);
        
    }),
    

    removeOrder:asyncHandler(async(req,res)=>{
        const {orderId}=req.body
        if(!orderId){
            throw new Error("error in fetching order id")
        }

        const deleteOrder=await Order.findByIdAndDelete(orderId)
        
        if(!deleteOrder){
            throw new Error("order dont deleted due to error")
        }
        res.send("order removed successfilly")
    }),

    userOrder:asyncHandler(async(req,res)=>{
        // console.log("userorder call is working");
        
        const {userId}=req.params
        // console.log("from order controler",userId);
        
        if(!userId){
            console.log("error in fetching userId");
            
            throw new Error("user id undefined")
        }
        const userOrder= await Order.find({user_id:userId})
        if(!userOrder){
            throw new Error("this user has no items in order")
        }
           res.send(userOrder)
        //    console.log(userOrder);
           
    })

}


module.exports = orderController