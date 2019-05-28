const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();
server.listen(8080);


//cookie
server.use(cookieParser("wesdfw4r34tfs"));

server.use("/",function(req,res){
    req.secret="wesdfw4r34tf";
    res.cookie("user","blue",{signed: true});

    console.log("签名cookie：",req.signesCookies)
    console.log("无签名cookie：",req.cookies)
    res.end("ok")
})