const Express = require("express")
const { PORT } = require("./config/serverConfig")
const router = require("./routes")

const app = Express()

app.use(router)


app.get("/ping",(req,res) => {

res.json({
    msg : "pong"
})

})


app.listen(PORT,() => {

console.log(`The server is up on ${PORT}`)

})


