const express = require("express")

const testRouter = express.Router()


testRouter.get("/",(req,res) => {

res.json({
    msg : "okay"
})

})

module.exports = testRouter