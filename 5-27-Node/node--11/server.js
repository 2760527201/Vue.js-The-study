const express = require("express");

var server = express();
server.listen(8080);

server.use("/",function(req,res){
    res.cookie("user","blue",{path:"/aaa",maxAge:5*24*3600*1000});
    res.end("ok")
})