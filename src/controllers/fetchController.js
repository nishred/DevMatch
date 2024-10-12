const ConnectionRequestsRepository = require("../repositories/ConnectionRequestsRepository")

const ConnectionRequestsService = require("../services/ConnectionRequestsService")


const connectionRequestService = new ConnectionRequestsService(new ConnectionRequestsRepository())


const {StatusCodes} = require("http-status-codes") 



async function getConnections(req,res,next)
{

   try{

      const id = req._id

      const matches = await connectionRequestService.getMatches(id)

      res.status(StatusCodes.ACCEPTED).json({

         success : "ok",
         message : "Fetched all the matches",
         data : matches,
         error : {}
      })
     


   }
   catch(err)
   {
    next(err)
   }


}


async function getRequests(req,res,next)
{

   try{

  
      const id = req._id

      const requests = await connectionRequestService.getRequests(id)

      res.status(StatusCodes.ACCEPTED).json({


        success : "ok",
        message : "Fetched all the requests successfully",
        data : requests,
        error : {}

      })


   }
   catch(err)
   {

      next(err)

   }


}


module.exports = {

    getConnections,
    getRequests
 

}