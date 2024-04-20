const express = require("express");
const app = express();

//app.use((resq,res) => {
  //  console.log("Hi,I am middleware");
    //res.send("middleware finished");
//});


//API Token

app.use("/api",(req,res,next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("access denied");
});

app.get("/api",(req,res)=>{
  res.send("data"); //api?token=giveaccess
});


//looger - morgan
// app.use((req,res,next) =>{
// req.time = new Date(Date.now()).toString();
// console.log(req.method, req.hostname,req.path,req.time);
//  next();
//});


//404
app.use((req,res)=>{
    res.status(404).send("Page not Found");
});


app.get("/",(req,res)=> {
    res.send("Hi,I am root.");
});

app.get("/random",(req,res)=> {
    res.send("this is a random page");
});

app.listen(8000,() =>{
    console.log("server is listening at port 8000");
});