const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession =require("cookie-session");

var server = express();
server.listen(8080);


//cookie
server.use(cookieParser());
server.use(cookieSession({
    keys : ["aaa","bbb","ccc"]
}));

server.use("/",function(req,res){
    res.clearCookie("user")
    res.end("ok")
})