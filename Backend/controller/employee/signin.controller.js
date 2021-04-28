const { validationResult } = require('express-validator');
let SignInModel= require("../../model/employee/signin.model.js")

let SignInFunction=(req,res)=>{
    let employeeId=req.body.employeeId;
    let password =req.body.password


  SignInModel.find({},(err,data)=>{
      if(!err){
           res.json(data)
          }
          else{
              res.send("Login Failure"+err)
          }
        })
    }
    module.exports={SignInFunction}
    
    /* 
    let getEmployeeById=(req,res)=>{
      let employeeId= req.params.employeeId
      SignInModel.find({_id:employeeId},(err,data)=>{
          if(!err){
           res.json(data)
          }
      })
    }
    
    let storeEmployeeDetails=(req,res)=>{
      let Employee= new SignUpModel({
        _id:req.body.employeeId,
         FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        EmailID:req.body.EmailID,
        password:req.body.password
      })
      Employee.save((err,data)=>{
        if (!err){
          res.send("record stored successfully")
        }else{
          res.send("Fail")
        }
      })
    }
  module.exports={SignInFunction,storeEmployeeDetails}
 // module.exports={SignInFunction, getEmployeeById}
 */