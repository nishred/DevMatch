const express = require("express")
const auth = require("../middlewares/auth")
const { getUser, updateUser, updatePassword } = require("../controllers/userController")
const profileUpdateValidator = require("../middlewares/profileUpdateValidator")
const passwordUpdateValidator = require("../middlewares/passwordUpdateValidator")



const profileRouter = express.Router()


profileRouter.get("/view",auth,getUser)

profileRouter.patch("/edit",auth,profileUpdateValidator,updateUser)

profileRouter.patch("/password",auth,passwordUpdateValidator,updatePassword)


module.exports = profileRouter