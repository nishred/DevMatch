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


const ConnectionRequest = mongoose.model("ConnectionRequests",connectionRequestSchema)


module.exports = ConnectionRequest


