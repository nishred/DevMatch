const express = require("express")

const testRouter = require("./testRouter")

const v1Router = express.Router()


v1Router.use("/test",testRouter)


module.exports =v1Router