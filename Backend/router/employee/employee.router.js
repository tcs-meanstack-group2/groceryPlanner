let express = require("express");
let router = express.Router();  //router reference. 
const EmployeeController = require("../../controller/employee/employee.controller");
let SignInController = require("../../controller/employee/signin.controller.js");

//mapping sub path with http methods.
router.get("/getEmployeeDetails",EmployeeController.getEmployeeDetails);
router.post("/addEmployeeDetails",EmployeeController.addEmployeeDetails);
router.post("/deleteEmployeeById/:id",EmployeeController.deleteEmployeeDetails);
router.put("/editOrder", EmployeeController.editOrder);
<<<<<<< HEAD
router.post("/employeeSignIn",SignInController.SignInFunction);
=======
router.put("/editProfile", EmployeeController.editProfile);
router.get("/getOrders",EmployeeController.getOrders);
>>>>>>> ea34d1d (Completed employee edit profile)

module.exports=router;