const express=require("express");
const request=require("request");
const app=express();
//const expressLayouts=require('express-ejs-layouts');

//maintain the same sequence,else it will throw an error that the app is used before declaration

app.use('view engine','ejs');
//var path=require('path');
//app.use(app.router);
//app.use(expressLayouts);
//app.set('views',path.join(__dirname,'views'));
//app.engine('html',require('ejs').renderFile);
//app.use(express.static('public'));
//routes.initialize(app);

//app.use(express.favicon());
//app.use(express.bodyParser());
//app.use(express.methodOverride());
// app.get, app.post, etc called before static folder
//app.use(app.router); 
//app.use(express.static(path.join(__dirname, 'public')));





const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//to parse the post request
app.use(express.static("public"))//to refer to the static files i.e image and  style.css


app.get("/",function(req,res){
    
    var today=new Date();
    var currentDay=today.getDay();
    
    var options={
        weekday:"long",
         day:"numeric",
        month:"long"};
        var day=today.toLocaleDateString("en-US",options);
       // res.send(day);
        //res.sendFile("/views"+"/list.html",{message:day});
        res.send

   
            
});




app.listen(3000,function(req,res){
    console.log("Port is running");
})