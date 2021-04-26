
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

//connecting with the routers
var Product = require("./router/admin/product.router.js");
var adminSignIn=require("./router/admin/signin.router.js");

app.use("/admin/product",Product);
app.use("/admin",adminSignIn);

app.listen(9090,()=>console.log("Server running on port number 9090"));

