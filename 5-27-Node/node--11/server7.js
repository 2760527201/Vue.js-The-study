const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession =require("cookie-session");

var server = express();
server.listen(8080);


//cookie
var arr = [];
for (var i = 0;i<100000;i++){
    arr.push("sig+" + Math.random());
}
server.use(cookieParser());
server.use(cookieSession({
    name : "sess",
    keys : arr,
    maxAge : 24*3600*1000
}));

server.use("/",function(req,res){
    if(req.session["count"] == null){
        req.session["count"]=1;
    }else{
        req.session["count"]++;
    }

    console.log(req.session["count"]);
    res.end("ok")
})