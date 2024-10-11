const express = require("express")
const authRouter = express.Router()

const signupValidator = require("../middlewares/signupValidator")
const User = require("../models/User")

const {createUser, login} = require("../controllers/userController")
const loginValidator = require("../middlewares/loginValidator")



authRouter.post("/signup",signupValidator,createUser)

authRouter.post("/login",loginValidator,login)



module.exports = authRouter




