const ConnectionRequest = require("../models/ConnectionRequest")

class ConnectionRequestsRepository
{


   async createConnection(fromId,toId,status)
   {
        
       const connection = await ConnectionRequest.create({
          fromUserID : fromId,
          toUserId : toId,
          status : status
       })
       return connection

   }


   async reviewConnection(id,status)
   {
  
        const result = await ConnectionRequest.updateOne({_id : id},{$set : {status : status}})   
        
        return result


   }



}



module.exports = ConnectionRequestsRepository