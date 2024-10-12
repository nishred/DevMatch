const { create } = require("../models/User")
const ConnectionRequestsRepository = require("../repositories/ConnectionRequestsRepository")

const ConnectionRequestsService = require("../services/ConnectionRequestsService")

const {StatusCodes} = require("http-status-codes")


const connectionRequestsService = new ConnectionRequestsService(new ConnectionRequestsRepository())



async function createConnection(req,res,next)
{

    try{

    const fromId = req._id

    const toId = req.params.id

    const status = req.params.status


    const connection = await connectionRequestsService.createConnection(fromId,toId,status)

     res.status(StatusCodes.CREATED).json({

       success : "ok",
       message : "Connection created successfully",
       data : connection,
       error : {}
     })
    

    }
    catch(err)
    {
        next(err)
    }


}



async function reviewConnection(req,res,next)
{


    try
    {
   const requestId = req.params.id

   const status = req.params.status

   const result = await connectionRequestsService.reviewConnection(requestId,status)


    res.status(StatusCodes.ACCEPTED).json({

      success : "ok",
      message : "Connection updated successfully",
      data : result,
      error : {}


    })

    }
    catch(err)
    {
       next(err)

    }


}



  module.exports = {

    createConnection,reviewConnection
 

  }


  
