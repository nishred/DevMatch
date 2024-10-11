const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    
    username : {type : String,
                required : true,
                unique : true
                },
                
    firstName : {type : String,
                required : true},

    lastName  : {type : String},

    email : {type: String,
             required: true,
            unique : true},

    password : {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
    
    },

    age : {type: Number},

    gender : {type: String,
             enum : ["Male","Female","Other"],
             required: true
    },

    photoUrl :{type : String},
    
    bio : {type : String,
          default : "This is a default bio of a user"
          },
    skills : {
        type : [String]
    }

},
{
   timestamps : true

})


userSchema.pre("updateOne",function (next) 
{

    const update = this.getUpdate()

    console.log(update)

    if(update.$set.email || update.$set.username)
        return next(new Error("Operation not allowed"))
    else
     next()


})


const User = mongoose.model("Users",userSchema)

module.exports = User