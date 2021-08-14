const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator",function(req, res){
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/",function(req,res){
  res.send("the claculation of "+req.body.n1+" and "+req.body.n2+" is: "+(Number(req.body.n1)+Number(req.body.n2)));
  //res.send("hi");
});

app.post("/bmicalculator",function(req, res){
    res.send("YOUR BMI IS "+(Number(req.body.weight)+(Number(req.body.Height)*Number(req.body.Height))));
});

app.listen(3000,function(){
  console.log("server started");
});
