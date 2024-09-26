const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
    product_img:{
        type:String,
        required:true,
        trim:true,
        
    },

    poduct_name:
    {
        type:String,
        required:true,
        trim:true
    },

    product_description:{
      type:String,
      required:true,
      trim:true,
      max:[200,"discription is to long"]
    },
    price:{
        type:Number,
        required:true,
        trim:true
   
    }
})

const Product = mongoose.Model("Product",productShema)
module.exports = Product