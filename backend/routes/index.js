const express = require("express")
const userRouter = require("./userRouter")

const router = express()

router.use(userRouter)




module.exports = router