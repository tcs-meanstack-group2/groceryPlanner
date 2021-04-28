const { validationResult } = require('express-validator');
const EmployeeModel = require("../../model/employee/employee.model");
const OrderModel = require("../../model/user/order.model");

const addEmployeeDetails = (req,res)=> {
    const employee = new EmployeeModel({
        _id:req.body.id,
        FirstName:req.body.first,
        LastName:req.body.last,
        EmailID:req.body.email,
        //generic password to be changed on first login
        Password: "welcome123"
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

const editOrder = (req,res)=> {
    console.log("here you go");
    let id = req.params.id;
    let status = req.body.status;
    OrderModel.updateOne({"_id": id}, {$set:{status: status}}, (err, result)=> {
        if(!err){
            console.log(result);
            if(result.nModified > 0){
                    res.send("Status updated successfully")
            }else {
                    res.send("Order not found");
            }
        }else {
            res.send("Error generated " + err);
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


module.exports={addEmployeeDetails, deleteEmployeeDetails, editOrder}