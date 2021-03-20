const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at: gselvaofficial@outlook.com");
});

app.get("/about", function(req, res){
    res.send("My name is Selva and I love being a loner");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Jogging</li><li>Coding</li></ul><p>Is it working perfectly</p>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
