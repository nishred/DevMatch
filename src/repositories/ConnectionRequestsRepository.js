const ConnectionRequest = require("../models/ConnectionRequest")

class ConnectionRequestsRepository
{


   async createConnection(fromId,toId,status)
   {
        
       const connection = new ConnectionRequest({
          fromUserID : fromId,
          toUserId : toId,
          status : status
       })

       const savedConnection =   await connection.save()

       return savedConnection

   }


   async reviewConnection(id,status)
   {
  
        const result = await ConnectionRequest.updateOne({_id : id},{$set : {status : status}})   
        return result

   }


   async fetchConnection(fromId,toId)
   {
       const connection = await ConnectionRequest.findOne({$or : [{fromUserID : fromId,toUserId:toId},{fromUserID : toId,toUserId : fromUserID}]})
       if(connection)
        return true
    else
    return false
     
   }


   async getMatches(id)
   {
       const matches = await ConnectionRequest.find({$or : [{fromUserID : id,status : "accepted"},{toUserId:id,status : "accepted"}]})
      
       return matches

   }


   async getRequests(id)
   {

      const requests = await ConnectionRequest.find({$not : {$or : [{fromUserID : id,status : "accepted"},{toUserId:id,status:"accepted"}]}})

      return requests


   }

}



module.exports = ConnectionRequestsRepository