const mongoose= require("mongoose")
const Product = require("./productShema")
const User = require("./userSchema")
const cartSchema = new mongoose.Schema({


product_id: [{
        type: mongoose.Types.ObjectId,
        ref :Product,
        required: [true, "Product name is required"],
      
      }],

      product_name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
      },     
      price:{
        type:String,
        required:true
      } ,

         total_price:{
        type:String,
    // required:true
       },

quantity:{
  type: Number,
  required: true,
  min: 1, 
  max: 10, 
  default: 1, 
},
user_id:[{
       type:mongoose.Types.ObjectId,
       ref:User,
       required:true,      
}],

delivery_address:{
       type:String,
       ref:User,
       required:true
}

},{
    timestamps:true
})

const Cart =mongoose.model("Cart",cartSchema)
module.exports=Cart