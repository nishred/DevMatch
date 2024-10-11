const bcrypt = require("bcrypt")
const AuthError = require("../errors/AuthError")

class userService 
{

  constructor(userRepository)
  {
    this.userRepository = userRepository
  }

  async createUser(user)
  {
      const passwordHash = await bcrypt.hash(user.password,10)

      user.password = passwordHash

      const savedUser = await this.userRepository.addUser(user)

     return savedUser

  }

  async getUser(filter)
  {
     const user = await this.userRepository.getUser(filter)

     return user


  }


  async getAllUsers()
  {
     return this.userRepository.getUsers()
     
  }


  async updateUser(id,data)
  {

      return await this.userRepository.updateUser(id,data)

  }

  async updatePassword(id,data)
  {
  
      const user = await this.userRepository.getUser({_id : id})

      const {currentPassword,newPassword} = data

      const passwordValidation = await bcrypt.compare(currentPassword,user.password)


      if(!passwordValidation)
        throw new AuthError()

      const newPasswordHash = await bcrypt.hash(newPassword,10)

     const nextUser =  await this.updateUser(id,{password : newPasswordHash})


     return nextUser


  }




}


module.exports = userService