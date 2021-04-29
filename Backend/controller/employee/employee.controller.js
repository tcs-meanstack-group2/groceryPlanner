const EmployeeModel = require("../../model/employee/employee.model");
const OrderModel = require("../../model/user/order.model.js")

const getEmployeeDetails =(req,res)=> {

    EmployeeModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

const addEmployeeDetails = (req,res)=> {

    const employee = new EmployeeModel({
        _id:parseInt(req.body.id),
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        EmailID:req.body.emailID,
        Password: req.body.pwd
    });

    employee.save((err,result)=> {
        if(!err){
            res.send('Employee successfully added')
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("User already exists"); //check for other error cases
        }
    })

}

const deleteEmployeeDetails= (req,res)=> {
    const EmployeeID = parseInt(req.params.id);

    EmployeeModel.deleteOne({_id:EmployeeID},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Employee deleted")
                }else {
                    res.send("Employee does not exist");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let editOrder = (req,res)=> {
    let id = req.body.id;
    let status = req.body.status;
    OrderModel.updateOne({_id: id}, {$set:{status: status}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Status updated succesfully")
            }else {
                    res.send("ID does not match any orders");
            }
        }else {
            res.send("Error: Please ensure your Order ID is valid");
        }
    })
}

module.exports={addEmployeeDetails, deleteEmployeeDetails, getEmployeeDetails, editOrder}