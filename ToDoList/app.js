const express=require("express");
const request=require("request");
const app=express();

//maintain the same sequence,else it will throw an error that the app is used before declaration

//app.use("view-engine","ejs");


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//to parse the post request
app.use(express.static("public"))//to refer to the static files i.e image and  style.css


app.get("/",function(req,res){
   var today=new Date();
   var currentday=today.getDay();
   var day="";
switch(currentday){
    case expression:
        case 0:
            day="Sunday";
        break;

        case 1 :
            day="Monday";
        break;

        case 3:
            day="Tuesday";
        break;

        case 4:
            day="wednesday";
        break;

        case 5:
            day="Thursday";
        break;
        
        case 6:
            day="Friday";
        break;

        
        case 6:
            day="Saturday";
        break;
         default:
         console.log("Error:current day is wrong");
        
}
 res.sendFile(__dirname +"/index.html")
});


app.listen(3000,function(req,res){
    console.log("Port is running");
})