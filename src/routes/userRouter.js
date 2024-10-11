const express = require("express")
const auth = require("../middlewares/auth")
const { getAllUsers } = require("../controllers/userController")

const userRouter = express.Router()


userRouter.get("/",auth,getAllUsers)


module.exports = userRouter