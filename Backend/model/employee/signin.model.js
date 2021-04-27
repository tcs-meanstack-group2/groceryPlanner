let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let empSignInSchema = mongoose.Schema({
    _id:Number,
    Password:String
})




let empSignInModel=mongoose.model("",empSignInSchema,"employee")


module.exports = empSignInModel