const express = require("express")
const auth = require("../middlewares/auth")

const userRouter = express.Router()


const {getConnections,getRequests} = require("../controllers/fetchController")

userRouter.get("/connections",auth,getConnections)

userRouter.get("/requests",auth,getRequests)


module.exports = userRouter