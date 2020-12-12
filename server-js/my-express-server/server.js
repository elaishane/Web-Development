//jshint esversion:6

const express = require("express");
const app = express();


app.get("/",function(req,res) {
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
res.send("Contact me on yash151099@gmail.com");
});

app.get("/about",function(req,res){
    res.send("I am Yash Adulkar");
})

app.listen(3000, function() {
    console.log("Server attacthed to port 3000");
});