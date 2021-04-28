
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

let url = "mongodb://localhost:27017/groceryStore";

app.use(bodyParser.urlencoded({extended:true}));   
app.use(bodyParser.json());                         
app.use(cors());  

const mongooseDbOption ={       
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   
mongoose.connection



var employee=require("./router/employee/signup.router.js")
app.use("/employee",employee)
app.post("/",(req,res)=>{
    var mydata=new EmployeeDetails({ userId:req.body.userId,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        EmailID:req.body.EmailID,
        password :req.body.password
    })
    console.log(req.body)
    mydata.save((err,result)=>{
        if (!err){
            console.log("Register sucessfully"+result)
        }else{
            console.log("err"+err)
        }
    
        })

})

app.listen(9090,()=>console.log("Server running on port number 9090"));