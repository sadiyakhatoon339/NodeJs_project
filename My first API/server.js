var express=require('express');
var app=express();
var bodyParser =require('body-parser');
const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*including database*/
var ingredients =[
    {
        "id":"232kAk",
        "text":"Eggs"

    },

    {
        "id":"dkP345",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frog Legs"
    }
];




app.get('/funiuns',function(request,response)
{
response.send('my first api');
});

app.post('/Ingredients',function(request,respone){
    var ingredient=request.body;
    if(!ingredient ||ingredient-text===""  ){
        response.status(500).send({error:"Your ingredient must have a text"})

    }
    else{
        ingredients.push(ingredient);
        response.status(200).send(ingredient);

    }
});

app.put('/Ingredients/:ingredientID',function(request,response){

    var ingredientId=requets.params.ingredientID;

    var text=request.body.text;
    if(!ingredientID || ingredientID ==="" || !text || text==="" )
    {
        response.status(500).send({erros:" You must provide"})
    } 
    for(var x=0;x<ingredients.length;x++)
    {
        var ing=ingredients[x];
        if(ing.id===request.params.ingredientID){
        ingredients[x].text =newText;
        objectFound=true;
        break;}

    }
    if(!objectFound){
       response.status(500).send({error:"Ingredient id not found"});
    }
    else {
        response.send(ingredients);
    }
  
});


app.listen(3000,function(){
    console.log('THIS app is running on port 3000');
});