const Express = require("express")
const { PORT, DB_URL, JWT_PASS } = require("./config/serverConfig")
const connectDB = require("./config/dbConfig")
const bodyParser = require("body-parser")
const User = require("./models/User")
const errorHandler = require("./middlewares/errorHandler")
const userSchema = require("./dto/userSchema")

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")

const app = Express()

const apiRouter = require("./routes")



app.use(bodyParser.json())

app.use(cookieParser())

app.use("/api",apiRouter)


app.use("/",errorHandler)



connectDB().then(() => {

   console.log("The connection to db is successfull")

   app.listen(PORT,() => {

     console.log(`The server has started running on ${PORT} successfully`)

   })


}).catch((err) => {

  console.log("The connection to DB was unsuccessfull")

})




