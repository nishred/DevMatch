const express = require("express")
const authRouter = require("./authRouter")
const userRouter = require("./userRouter")
const profileRouter = require("./profileRouter")
const connectionRequestRouter = require("./connectionRequestRouter")

const apiRouter = express.Router()


apiRouter.use("/auth",authRouter)

apiRouter.use("/user",userRouter)

apiRouter.use("/profile",profileRouter)

apiRouter.use("/request",connectionRequestRouter)


module.exports = apiRouter


