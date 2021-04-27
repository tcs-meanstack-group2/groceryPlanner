let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let userSignInSchema = mongoose.Schema({
    _id:Number,
    Password:String
})




let userSignInModel=mongoose.model("",userSignInSchema,"user")


module.exports = userSignInModel