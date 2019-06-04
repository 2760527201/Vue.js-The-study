const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const multer = require("multer")
const consolidate =  require("consolidate")

var server = express();

server.listen(8080);

//1解析cookie
server.use(cookieParser("sadafsaaadadadd"));
//2使用session
var arr = [];
for (var i=0;i<100000;i++){
    arr.push("keys_" + Math.random());
}
server.use(cookieSession({name:"zns_sess_id",keys: arr,maxAge: 20*3600*1000}));
//3post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest : "./www/upload"}).any())

//4配置模板引擎
//输出的信息
server.set('view engine','html');
//模板文件放在那里
server.set('views','./views')
//哪种模板引擎
server.engine('html',consolidate.ejs)

//接收用户数据
server.get('/index',function (req,res) {
    // if (req.session.userid){  //登陆过
        res.render('1.ejs',{name: "blue"});
    // }else{
    //     res.render('login.ejs',{});
    // }
})

//static数据   //{ a: '12', b: '5' } {} { 'Webstorm-bbf7ba1a': 'ae769dbe-5e0a-4030-8121-f7a8fcc51c85' } {}
server.use(static("./www"));



