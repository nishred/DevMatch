const cookieParser = require("cookie-parser")
const AuthError = require("../errors/AuthError")

const jwt = require("jsonwebtoken")
const { JWT_PASS } = require("../config/serverConfig")

async function auth(req,res,next)
{
    try{ 
   const {token} = req.cookies

   if(!token)
   return res.status(401).json({
 
     success : "False",
     message : "Please login again"
    
})

   const parsedJwt = await jwt.verify(token,JWT_PASS)

   const {_id} = parsedJwt

   req._id  = _id
   next()

   }
   catch(err)
   {
    next(err)
   }


}


module.exports = auth