const userSignInModel = require("../../model/user/signin.model");

let userSignInFunction=(req,res)=>{

    let userId=req.body.userId;
    let password =req.body.password;

userSignInModel.find({},(err,data)=>{
    if(!err){
        res.json(data)
       }
       else{
           res.send("Login Failure")
       }
})
}
module.exports={userSignInFunction}
/*
userSignInModel.find({_id:userId},(err,data)=>{
    if(!err){
        res.json(data)
       }
       else{
           res.send("Login Failure")
       }
}) 
*/


  