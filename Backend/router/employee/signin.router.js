let express = require("express");
let router = express.Router();  //router reference. 
const { check, validationResult } = require('express-validator');

let SignInController = require("../../controller/employee/signin.controller.js");



router.post("/employeeSignIn",[check('employeeId').not().isEmpty().withMessage('Please enter a id'),
check('Password').not().isEmpty().withMessage('Please enter a password'),]
,SignInController.SignInFunction)


module.exports=router;

