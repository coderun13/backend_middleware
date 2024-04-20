const express = require("express");
const app = express();

app.use((resq,res) => {
    console.log("Hi,I am middleware");
    res.send("middleware finished");
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