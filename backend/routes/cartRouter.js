const express = require("express")

const cartController = require("../controller/cartController")
const isAuth = require("../middleware/isAuth")

const cartRouter =express.Router()


cartRouter.delete("/deleteCart",cartController.removeCart)
cartRouter.get("/userCart/:userId",isAuth,cartController.userCart)
cartRouter.post("/addcart/:userId",isAuth ,cartController.addCart)


module.exports=cartRouter