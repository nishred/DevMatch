const mongoose = require("mongoose")

const connectionRequestSchema = new mongoose.Schema({

   fromUserID : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Users",
      required : true
   },

   toUserId : {

     type : mongoose.Schema.Types.ObjectId,
     ref : "Users",
     required : true

   },

   status : {

     type : String,
     enum : {
        values : ["ignore","interested","accepted","rejected"],
        message : `${VALUE} is not a valid status type`
     }

   }


},{

timestamps : true

})

connectionRequestSchema.pre("save", function(next)
{

  const connection = this

  if(connection.fromUserID === connection.toUserId)
   throw new Error("A connection can't be sent to the same user")
else
  next()

})


const ConnectionRequest = mongoose.model("ConnectionRequests",connectionRequestSchema)


module.exports = ConnectionRequest


