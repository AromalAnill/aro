const asyncHandler = require("express-async-handler")
const Product = require("../models/productShema")

const addProduct = {

addProducts:asyncHandler(async(req,res)=>{

const { product_name,product_description,price,category,brand,stock  }= req.body

console.log("products",req.body);

    
if(!product_name||!product_description||!price||!category||!brand||!stock){
    throw new Error("incomplete data product")
}
 const createProduct=await Product.create({
    product_name,
    product_description,
    price ,
    category,
    brand,
    stock
 })
if(!createProduct){
    throw new Error(" Product not added due to error")
}
res.send(createProduct)
console.log("created product",createProduct);

}),


viewAllproducts:asyncHandler(async(req,res)=>{
    const allProduct = await Product.find()
     if(!allProduct){
        throw new Error(" no products to show")
     }

       res.send(allProduct)
}),


selectedProduct:asyncHandler(async(req,res)=>{

    const {_id} = req.params
    const selectedProduct = await Product.findById(_id)
    if(!selectedProduct){
        throw new Error("product not find")
    }
    res.send(selectedProduct)
})


}




module.exports = addProduct