let OrderModel = require("../../model/user/order.model.js")
let UserModel = require("../../model/user/user.model.js")
let BankModel = require("../../model/user/bank.model.js")
let TicketModel = require("../../model/user/ticket.model")
//let SelectedOrdersModel = require("../../model/user/selectedOrders.model")
let SignInModel= require("../../model/user/signin.model")
const jwt = require('jwt-simple');
// Retrieving Order status from Mongo Database
let getOrderById = (req, res) => {
    let id = req.params.id;
    OrderModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

let getUserById = (req, res) => {
    let id = req.params.id;
    UserModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

let SignInFunction=  (req,res)=>{
  
    let UserId=req.body.UserId
    let Password=req.body.Password
    let jwtKey="skjdbfksjdbf";
    console.log(UserId);
    SignInModel.findOne({_id:UserId},(err,data)=>{
        console.log(Password);
        if(data.LoginAttempts > 0) {
            if(data == null) {
                const token = "Enter Correct ID";
                res.send({token});
            }
            else if(data.password!=Password) {
                const token = "Enter correct password. You have " + data.LoginAttempts + " attempts remaining.";
                res.send({token});
                SignInModel.updateOne({_id:UserId}, {$inc: {LoginAttempts: -1}}, (err,data)=>{
                    if(err) {
                        console.log(err);
                    }
                });
            }
            else{
                const token = jwt.encode(UserId,jwtKey);
                res.send({token});
                SignInModel.updateOne({_id:UserId}, {$set: {LoginAttempts: 3}}, (err,data)=>{
                    if(err) {
                        console.log(err);
                    }
                });
            }
        }
        else {
            const token = "You have no valid login attempts remaining. Please raise a ticket to reset your account.";
            res.send({token});
        }
    });


}

let SignUpFunction = (req,res)=> {

    let userCount;
    //
    UserModel.countDocuments().then((count) => {
        userCount=count+101; 
        console.log(userCount); 
        console.log(req.body.newFname); 
        console.log(req.body.newLname); 
        console.log(req.body.newEmail); 
        console.log(req.body.pass); 
        console.log(req.body.newDob); 
        console.log(req.body.newPhone); 
        console.log(req.body.newAdd);   
    let user = new UserModel({
        _id:userCount,
        fName:req.body.newFname,
        lName:req.body.newLname,
        email:req.body.newEmail,
        password:req.body.pass,
        dob:req.body.newDob,
        pNumber:req.body.newPhone,
        address:req.body.newAdd,
        funds: 500,
        accNumber: 200,
        LoginAttempts: 3
     });
   
     user.save((err,result)=> {
         if(!err){
             res.send("user added successfully ")
         }else {
             console.log(err);
             res.send("user didn't add ");
         }
     })
    });
    //
}

let editProfile = (req,res)=> {
    let id = req.body.id;
    let oldPass = req.body.pass;
    let newPass = req.body.newPass;
    let fName = req.body.newFname;
    let lName = req.body.newLname;
    let email = req.body.newEmail;
    let pNum = req.body.newPhone;
    let dob = req.body.newDob;
    let add = req.body.newAdd;
    UserModel.updateOne({_id: id, password: oldPass}, {$set:{
        password: newPass,
        fName: fName,
        lName: lName,
        email: email,
        pNumber: pNum,
        dob: dob,
        address: add
    }}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Password updated succesfully")
            }else {
                    res.send("User ID or Password is incorrect");
            }
        }else {
            res.send("Error: Please ensure your User ID is valid");
        }
    })
}

let addFunds = (req,res)=> {
    let id = req.body.accNum;
    let addFund = req.body.funds;
    BankModel.updateOne({_id: id}, {$inc:{funds: addFund}}, (err, result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Balance updated succesfully");
            }else {
                    res.send("Account number is incorrect");
            }
        }else {
            res.send("Error generated " + err);
        }
    })
}


let addTicket = (req,res)=> {
   
    let addTicket = new TicketModel({
        _id:req.body.User_id,
        ticket_message:req.body.ticket_message,
    });
    addTicket.save((err,result)=> {
        if(!err){
            res.send("Ticket submitted successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Ticket didn't store ");
        }
    })

}             

let newOrders = (req,res) => {
    let newOrder = new OrderModel({
        _id:req.body.id,
        userId:req.body.userId,
        status:req.body.status,
        amount:req.body.amount,
        date:req.body.date
        
    });

    newOrder.save((err,result)=> {
        if(!err){
            res.send("Orders Stored Successfully ")
            
        }else {
            res.send("Order did not store, please try again! ");
        }
    })
} 

let getFundsById = (req, res) => {
    let id = req.params.id;
    BankModel.find({_id: id}, (err, data) => {
        if(!err) {
            res.json(data);
        }
    })
}

module.exports = {getOrderById, editProfile, addFunds, getFundsById, addTicket, newOrders,SignUpFunction,SignInFunction, getUserById};

