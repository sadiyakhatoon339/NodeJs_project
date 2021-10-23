const express=require("express");
const app=express();//represents the express module

// "/" specifies the route
app.get("/",function(request,response){
    response.send("<h1>hello world</h1>");

});

app.get("/contact",function(req,res){
    res.send(("Contact me at:sadiyakhatoon339@gmail.com"))

});

app.get("/hobbies",function(req,res){
    res.send(("badtameezi"))

});

app.get("/about",function(req,res){
    res.send(("I am a coder"))

});
app.listen(3000,function()
{
    console.log("Server started on port :300");
});
