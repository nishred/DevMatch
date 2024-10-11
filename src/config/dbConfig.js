const mongoose = require("mongoose")

const {DB_URL} = require("./serverConfig")


async function connectDB()
{
    await mongoose.connect(DB_URL)

   
}


module.exports = connectDB



// logical operators in mongoose

// Model.find({
//     $logicalOperator: [     $and $or 
//       { condition1 },
//       { condition2 },
//       // additional conditions...
//     ]
//   })
//   .then(result => console.log(result))
//   .catch(err => console.error(err));
  




