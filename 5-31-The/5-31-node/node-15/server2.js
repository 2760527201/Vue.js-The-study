const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const multer = require("multer")
const ejs = require("ejs");
const jade = require("jade");

var server = express();

server.listen(8080);

//解析cookie
server.use(cookieParser("sadafsaaadadadd"));
//使用session
var arr = [];
for (var i=0;i<100000;i++){
    arr.push("keys_" + Math.random());
}
server.use(cookieSession({name:"zns_sess_id",keys: arr,maxAge: 20*3600*1000}));
//post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest : "./www/upload"}).any())
//用户请求
server.use('/',function (req,res,next) {
    console.log(req.query,req.body,req.cookies,req.session);
});
//static数据   //{ a: '12', b: '5' } {} { 'Webstorm-bbf7ba1a': 'ae769dbe-5e0a-4030-8121-f7a8fcc51c85' } {}
server.use(static("./www"));



