const express = require("express")
const adminController = require("../controller/adminController")

const adminRouter = express.Router()

adminRouter.get("/viewUser",adminController.viewUser)
adminRouter.get("/adminAllproduct",adminController.adminAllproduct)
adminRouter.delete("/deleteUser",adminController.deleteUser)
adminRouter.delete("/deleteProduct",adminController.deleteProduct)



module.exports= adminRouter