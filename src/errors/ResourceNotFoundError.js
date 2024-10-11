const BaseError = require("./BaseError");

class ResourceNotFoundError extends BaseError
{

  constructor(name,details)
  {
     super("ResourceNotFoundError","Resource Not Found")
     this.name = name
     this.details = details

  }

}


module.exports = ResourceNotFoundError