let express = require("express");
let router = express.Router();  //router reference. 
let SignInController = require("../../controller/admin/signin.controller.js");
const { check, validationResult } = require('express-validator');

//mapping sub path with http methods.
//they map to the respective conttroller
//using express validator to validate data before proceesing the request in the controller 
router.post("/adminSignIn",
[check('AdminId').not().isEmpty().withMessage('Please enter a id'),
 check('Password').not().isEmpty().withMessage('Please enter a password'),]
,SignInController.SignInFuction);

module.exports=router;