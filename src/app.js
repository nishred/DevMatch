const Express = require("express")
const { PORT, DB_URL } = require("./config/serverConfig")
const router = require("./routes")
require("./config/dbConfig")


const app = Express()

app.use(router)


app.listen(PORT,async () => {

console.log(`The server is up on ${PORT}`)


})





