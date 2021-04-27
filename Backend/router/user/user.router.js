let express = require("express");
let router = express.Router();
let UserController = require("../../controller/user/user.controller.js")

// Route for retrieving order status
router.get("/retrieveOrder/:id", UserController.getOrderById);
router.put("/editProfile", UserController.editProfile);

module.exports = router;