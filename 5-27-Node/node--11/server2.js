const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();
server.listen(8080);


//cookie
server.use(cookieParser());

server.use("/",function(req,res){
    // res.cookie("user","blue",{path:"/aaa",maxAge:5*24*3600*1000});
   console.log(req.cookies)
    res.end("ok")
})