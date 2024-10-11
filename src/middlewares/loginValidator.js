const {zod} = require("zod")
const { loginSchema } = require("../dto/userSchema")

async function loginValidator(req,res,next)
{

   try{

     const data = req.body

     loginSchema.parse(data)

     next()



   }
catch(err)
{

    next(err)
}




}


module.exports = loginValidator