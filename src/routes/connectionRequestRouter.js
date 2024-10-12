const express = require("express")
const auth = require("../middlewares/auth")
const { createConnection } = require("mongoose")
const { reviewConnection } = require("../controllers/connectionRequestsController")
const connectionRequestRouter = express.Router()


connectionRequestRouter.post("/create/:userId/:status",auth,createConnection)

connectionRequestRouter.post("/review/:requestId/:status",auth,reviewConnection)



module.exports = connectionRequestRouter

