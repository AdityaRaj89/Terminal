const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000,function(){
    console.log("server");
});

const subx = document.querySelector("#sub");
subx.addEventListener("click",function(){
    console.log("sum initiali");
});