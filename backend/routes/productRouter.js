const express =require("express")
const addProduct = require("../controller/productController")
const productRouter=express.Router()


productRouter.post("/addproduct",addProduct.addProducts)




module.exports=productRouter