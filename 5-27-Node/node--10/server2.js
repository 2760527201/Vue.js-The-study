const express = require("express");
const bodyParser = require("body-parser");

var server = express();
server.listen(8080);
//加工body
server.use(bodyParser.urlencoded({
    extends : false,           //扩展模式
    limit : 2*1024*1024      //限制
}));


server.use("/",function(req,res){
    //post
    console.log(req.body)
})