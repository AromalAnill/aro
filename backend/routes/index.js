const express = require("express")
const userRouter = require("./userRouter")
const productRouter = require("./productRouter")
const cartRouter = require("./cartRouter")
const OrderRouter = require("./orderRouter")
const adminRouter = require("./adminRouter")

const router = express()

router.use("/admin",adminRouter)
router.use("/admin",productRouter)

router.use("/user",cartRouter)
router.use("/user",OrderRouter)
router.use("/user",userRouter)



module.exports = router