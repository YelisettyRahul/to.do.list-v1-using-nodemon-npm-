
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Play video games","Complete assignments","do multi course"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
  var today = new Date();
  var currentday = today.getDay();
  
  var options={
    weekday:"long",
    day:"numeric",
    month :"long"
  };

  var day = today.toLocaleDateString("en-US",options);


  res.render("list",{tempday:day,newlistItems:items});
});



app.post("/",function(req,res){
 var item=req.body.newItem;
  console.log(item);
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function(){
    console.log("server started on port 3000");
});

