let OrderModel = require("../../model/user/order.model.js")
let UserModel = require("../../model/user/user.model.js")

// Retrieving Order status from Mongo Database
let getOrderById = (req, res) => {
    let id = req.params.id;
    OrderModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

let editProfile = (req,res)=> {
    let id = req.body.id;
    let oldPass = req.body.pass;
    let newPass = req.body.newPass;
    UserModel.updateOne({_id: id, password: oldPass}, {$set:{password: newPass}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("User ID or Password is incorrect");
            }
        }else {
            res.send("Error generated " + err);
        }
    })
}

module.exports = {getOrderById, editProfile};