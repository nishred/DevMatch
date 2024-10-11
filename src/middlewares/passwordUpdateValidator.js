const {StatusCodes} = require("http-status-codes");
const { updatePasswordSchema } = require("../dto/userSchema");

async function passwordUpdateValidator(req,res,next)
{

    try{

    
   const data = req.body;

   updatePasswordSchema.parse(data)

   next()



    }
    catch(err)
    {  
       res.status(StatusCodes.BAD_REQUEST).json({


          success : "false",
          message : "Please check the details again"


       })

    }





}

module.exports = passwordUpdateValidator