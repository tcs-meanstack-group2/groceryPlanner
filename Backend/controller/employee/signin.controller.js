const { validationResult } = require('express-validator');
let SignInModel= require("../../model/employee/signin.model.js")

const jwt = require('jwt-simple');

let SignInFunction=(req,res)=>{
  
    let EmployeeId=req.params.EmployeeId
    let Password=req.params.Password

    let Employee=  SignInModel.findOne({_id:EmployeeId,Password:Password})
    //if(data._id==EmployeeId && data.Password==Password)
    console.log (Employee)
   if (!Employee){
    {
      const token = jwt.encode(AdminId,jwtKey);
      res.send({token});
      }
      
        
      
  }
  else{
      res.send("Wrong Admin Credentials Try Again");
      const token = "Enter Correct Credentials";
      res.send({token});
  }
    }

  
  
  let storeEmployeeDetails=(req,res)=>{
    let Employee= new SignInModel({
      _id:req.body.EmployeeId,
       FirstName:req.body.FirstName,
      LastName:req.body.LastName,
      EmailID:req.body.EmailID,
      Password:req.body.Password
    })
    Employee.save((err,data)=>{
      if (!err){
        res.send("Register successfully")
      }else{
        res.send("Try again"+err)
      }
    })
  }

  
module.exports={SignInFunction,storeEmployeeDetails}
    
/*let Employee=  SignInModel.findOne({_id:EmployeeId,Password:Password},(err, data) =>{
      if(data._id==EmployeeId && data.Password==Password)
      {
        res.send("Login Sucess");
      }
      else{
        const error= new Error("Wrong Credentials")
      throw error;
    }
    
  })password.isVaild
}*/
  /*  const ValidPassword= Employee.ValidPassword(Password)
    const ValidEmployeeId=Employee.ValidPassword(EmployeeId)
    if(ValidPassword && ValidEmployeeId){
      res.send("Login Sucess");
    }else{
      const error= new Error("Wrong Credentials")
      throw error;
     
  }
*/


  


   /* SignInModel.findOne({_id:EmployeeId,Password:Password},(err, data) => 
  {
      if (!err) 
      
       //if(data._id==EmployeeId && data.Password==Password)
             // if (EmployeeId.IsValid && Password.IsValid)
              // {
              {
                
               res.send("Login Sucess");
               }
                else {
          res.send("Login Failure");
          const error= new Error("Wrong Credentials")
          throw error;
                       }
      
    //}
    })
   }*/
  


    /* if (!Employee){
      const error= new Error("Wrong Credentials")
      throw error;
    }else{
      res.send("Login Sucess");
    }
    */

  /*  const ValidPassword= Employee.ValidPassword(Password)
    const ValidEmployeeId=Employee.ValidPassword(EmployeeId)
    if(ValidPassword && ValidEmployeeId){
      res.send("Login Sucess");
    }else{
      const error= new Error("Wrong Credentials")
      throw error;
     
  }
*/


  