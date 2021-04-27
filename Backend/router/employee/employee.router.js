let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../../controller/employee/employee.controller");
const { check, validationResult } = require('express-validator');

//mapping sub path with http methods. 
router.post("/addEmployeeDetails",
[check('EmployeeID').isInt().withMessage('Please enter a ProductID that is a number'),
check('FistName').isString().withMessage('ProductName should be a string'),
check('LastName').isString().withMessage('ProductPrice should be a number'),
check('Password').isString().withMessage('ProductQuantity should be a number')]
,EmployeeController.addEmployeeDetails);

router.delete("/deleteEmployeeById/:id",EmployeeController.deleteEmployeeDetails);

module.exports=router;