let app = require("express")();
let http = require("http").Server(app)
let io = require ("socket.io")(http)
let bodyParser = require("body-parser");

let port=9090

const mogodboption=
    { useNewUrlParser: true, 
    useUnifiedTopology: true
    }

app.use(bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json())

let url="mongodb://localhost:27017/groceryStore"
let obj=require("mongoose");
obj.connect(url,mogodboption)
obj.Mongoose.connection

var employee=require("./router/employee/signin.router.js")
app.use("/employee",employee)


app.listen(9090,()=>console.log("running on 9090"));