const express = require("express");

var server = express();

server.use("/a.html",function(req,res){
    // res.write("abc");
    res.send({a:12,b:5});
    res.end();
});
server.use("/b.html",function(req,res){
    res.send("123");
    res.end();
});
server.listen(8080);