const EmployeeModel = require("../../model/employee/employee.model");

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
                    res.send("Product deleted successfully")
                }else {
                    res.send("Product not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

//SHOULD BE ORDERS CONTROLLER
// const getMonthlyReport = (req, res) => {
//     const month = req.params.month; //should be number of month

//     // find({ "$expr": { "$eq": [{ "$month": "$timestamp" }, month] } }
//     OrderModel.find({ $expr: { $eq: [{ $month: $timestamp }, month] } }, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific month
//             res.json(result);
//         }
//       });
// }

// const getDailyReport = (req, res) => {
//     const date = req.params.timestamp; //may need convert to date

//     OrderModel.find({timestamp: date}, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific day
//             res.json(result);
//         }
//       });
// }

// const specificUserReport = (req, res) => {
//     const id = req.params.id; 

//     OrderModel.find({ userID: id }, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific day
//             res.json(result);
//         }
//       });
// }

// //might be chalked; need extra table for products ordered
// const specificProductReport = (req, res) => {
//     const id = req.params.id; 

//     OrderModel.find({ userID: id }, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific day
//             res.json(result);
//         }
//       });
// }


module.exports={addEmployeeDetails, deleteEmployeeDetails, getEmployeeDetails}