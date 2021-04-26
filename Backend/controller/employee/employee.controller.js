const { validationResult } = require('express-validator');
const EmployeeModel = require("../../model/admin/employee.model");

const addEmployeeDetails = (req,res)=> {
    const employee = new EmployeeModel({
        _id:req.body.id,
        FirstName:req.body.first,
        LastName:req.body.last,
        EmailID:req.body.email,
        //auto gen password
        // Password:req.body.pwd
    });

    const errors = validationResult(req);
    //If any errors are present return the error message
    if (!errors.isEmpty()) {
        let errorMessage="";
        errors.array().forEach(element => {
            errorMessage=errorMessage+element.msg+"\n";
        });
        //return res.status(422).json(errorMessage);
        return res.send(errorMessage);
      }

    employee.save((err,result)=> {
        if(!err){
            res.send("Employee added successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Employee didn't add ");
        }
    })

}


const deleteEmployeeDetails= (req,res)=> {
    const EmployeeID = req.params.id;
    EmployeeModel.deleteOne({_id:EmployeeID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Product deleted successfully")
                }else {
                    res.send("Product not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}


module.exports={addEmployeeDetails, deleteEmployeeDetails}