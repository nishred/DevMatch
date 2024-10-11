
class BaseError extends Error{


   constructor(name,messsage)
   {
      super(messsage)
      this.name = name;
   }


}

module.exports = BaseError