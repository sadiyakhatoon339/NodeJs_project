const express=require("express");
const bodyparser=require("body-parser");

const app=express();


//code we need to write whenever we want to use bodyparser
app.use(bodyparser.urlencoded(    //we are trying to grab the info that gets posted
{
    extended:true //it allows us to post nested objects
}
));
//



app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html")  //to use index.html here to send file to the server rather tha
                                             //  than sending it directltly
});

app.post("/",function(req, res){

    var n1=parseFloat(req.body.num1);
    var n2=parseFloat(req.body.num2);
    var result=n1/(n2*n2);
  
    res.send("Your BMI is: "+result);
});

app.listen(3000,function(req, res){
   console.log("server is running on port:3000");
})