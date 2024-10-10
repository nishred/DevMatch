const mongoose = require("mongoose")

const {DB_URL} = require("./serverConfig")


async function connectDB()
{
    await mongoose.connect(DB_URL)
   
}


connectDB().then(() => {

   console.log("Connection to DB was successfull")

}).catch((err) => {

   console.log("Connect to DB was unsuccessfull")

})


