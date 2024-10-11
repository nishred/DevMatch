const {ZodError} = require("zod")

function errorHandler(err,req,res,next)
{

   if(err instanceof ZodError)
    {
       return res.json({
         message : err.issues[0].message,
         error : err
      })
    } 

    res.json({
        success : "False",
        error : err.message
    })
   

}

module.exports = errorHandler