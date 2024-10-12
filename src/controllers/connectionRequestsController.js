const { create } = require("../models/User")
const ConnectionRequestsRepository = require("../repositories/ConnectionRequestsRepository")
const ConnectionRequestsService = require("../services/ConnectionRequestsService")
const {StatusCodes} = require("http-status-codes")
const connectionRequestsService = new ConnectionRequestsService(new ConnectionRequestsRepository())

const User = require("../models/User")

async function createConnection(req,res,next)
{

    try{

    const fromId = req._id

    const toId = req.params.id

    const status = req.params.status

    const user = await User.findOne({_id : toId})

    if(!user)
      throw new Error("The user doesn't exist")

    const allowedStatuses = ["ignore","interested"]

    if(!allowedStatuses.includes(status))
        throw new Error("Invalid status type")

    const exists = await connectionRequestsService.fetchConnection(fromId,toId)
     
    if(exists)
        throw new Error("Connection Request already exists")

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

   const allowedStatuses = ["rejected","accepted"]


   if(!allowedStatuses.includes(status))
    throw new Error("Invalid status type")



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


  
