const express=require("express");
const request=require("request");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//to parse the post request
app.use(express.static("public"))//to refer to the static files i.e image and  style.css

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})




app.post("/",function(req,res){
    var firstName=req.body.Fname;
    var LastName=req.body.Lname;
    var email=req.body.email;
    console.log(firstName,LastName,email);

})


app.listen(3000,function(req,res){
    console.log("Port is running");
})


//3ae5ca220bd-us5a5e8a2514464bb8dd71e6