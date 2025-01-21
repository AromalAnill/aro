const express = require("express");

const userController = require("../controller/userController");
const isAuth = require("../middleware/isAuth");
const addProduct = require("../controller/productController");

const userRouter = express.Router()


userRouter.post("/register",userController.register)
userRouter.post("/login",userController.login)
userRouter.get("/logout",isAuth, userController.logout)
userRouter.put("/update_mail",userController.update_with_mail)
userRouter.put("/update",userController.update)
userRouter.get("/allProducts",addProduct.viewAllproducts)
userRouter.get("/selectedproduct/:_id",addProduct.selectedProduct)



module.exports = userRouter