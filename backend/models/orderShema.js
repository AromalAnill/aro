const mongoose =require("mongoose")
const orderShema =new mongoose.Schema({

    product_id:[{
        type:mongoose.Types.ObjectId,
        required:true
    }],

    product_name:{
        type:String,
    },
    user_name:{
        type:String,
    },
    price:{
        type:String,
    },
    totalprice:{
        type:String,
    },
    address:{
        type:String,
    },

    shiping_status:{
        type:String,
        enum:["order placed","pending"],
        default:"order placed"
    },

    quantity:{
      type: Number,
        required: true,
        min: 1, 
        max: 10, 
        default: 1, 
    },
 
    cart_id:[{ type:mongoose.Types.ObjectId,
        // required:true
    }],

    user_id:[{
        type:mongoose.Types.ObjectId,
        required:true
    }]
})

const Order = mongoose.model("Order",orderShema)
module.exports=Order