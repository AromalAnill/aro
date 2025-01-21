const express = require("express")
const orderController = require("../controller/orderController")
const isAuth = require("../middleware/isAuth")

const OrderRouter= express.Router()

OrderRouter.post("/buy_cart_Order/:userId",orderController.buy_cart_Order)
OrderRouter.post("/placeOrder/:userId",isAuth,orderController.placeOrder)
OrderRouter.delete("/removeOrder", orderController.removeOrder)
OrderRouter.get("/userOrder/:userId",isAuth, orderController.userOrder)




module.exports=OrderRouter