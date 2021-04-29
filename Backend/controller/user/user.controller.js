let OrderModel = require("../../model/user/order.model.js")
let UserModel = require("../../model/user/user.model.js")
let BankModel = require("../../model/user/bank.model.js")
let TicketModel = require("../../model/user/ticket.model")
let SelectedOrdersModel = require("../../model/user/selectedOrders.model")
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

let SignInFunction=  (req,res)=>{
  
    let UserId=req.body.UserId
    let Password=req.body.Password
    let jwtKey="skjdbfksjdbf";
    console.log(UserId);
     SignInModel.findOne({_id:UserId},(err,data)=>{
        console.log(Password);
        console.log(data.password);
       if(data==null)
       {
        const token = "Enter Correct ID";
        res.send({token});
       }
      else if(data.password!=Password)
      {
        const token = "Enter Correct password";
        res.send({token});
      }
      else{
        const token = jwt.encode(UserId,jwtKey);
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
         accNumber: 200
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
        User_id:req.body.User_id,
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

let orderSelected = (req,res)=> {
    let orderSelected = new SelectedOrdersModel({
        _id : req.body._id,
        ProductName : req.body.ProductName,
        ProductPrice : req.body.ProductPrice,
        ProductQuantity : req.body.ProductQuantity,
        Discount : req.body.Discount
    });
    orderSelected.save((err,result)=> {
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

module.exports = {getOrderById, editProfile, addFunds, getFundsById, addTicket, orderSelected,SignInFunction,SignUpFunction};

