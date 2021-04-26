let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../../controller/admin/product.controller.js");
const { check, validationResult } = require('express-validator');

//mapping sub path with http methods. 
router.post("/addProductDetails",
[check('ProductID').isInt().withMessage('Please enter a ProductID that is a number'),
check('ProductName').isString().withMessage('ProductName should be a string'),
check('ProductPrice').isInt().withMessage('ProductPrice should be a number'),
check('ProductQuantity').isInt().withMessage('ProductQuantity should be a number'),
check('Discount').isInt().withMessage('Discount should be a number'),]
,ProductController.addProductDetails);

router.delete("/deleteProductDetailsById/:ProductID",ProductController.deleteProductDetailsById);

router.put("/updateProductDetails",
[check('ProductID').isInt().withMessage('Please enter a ProductID that is a number'),
check('ProductPrice').isInt().withMessage('ProductPrice should be a number'),
check('ProductQuantity').isInt().withMessage('ProductQuantity should be a number'),
check('Discount').isInt().withMessage('Discount should be a number'),]
,ProductController.updateProductDetails);

router.get("/allProductDetails",ProductController.getProductDetails);

module.exports=router;