const mongoose= require("mongoose")

const cartSchema = new mongoose.Schema({


shiping_date:{
    type:Date,
    trim:true,
    required:true
},


arriving_date:{
    type:Date,
    trim:true,
    required:true

},

total_price:{
    type:String,
    required:true
}

})

const cart =mongoose.Model("cart",cartSchema)
module.exports=cart