const { updateSchema } = require("../dto/userSchema")

const {StatusCodes} = require("http-status-codes")


async function profileUpdateValidator(req,res,next)
{

    try{
    const data = req.body

    updateSchema.parse(data)


    next()


    }
    catch(err)
    {
 
      res.status(StatusCodes.BAD_REQUEST).send({

        success : "false",
        message : "Please check the details again",
        error : err
      })

    }



}

module.exports = profileUpdateValidator