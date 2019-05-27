const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urlLib = require("url");

var users = {}

var server = http.createServer(function(req,res){
    //解析数据
    var str = "";
    req.on("data",function(data){
        str += data;
    });
    req.on("end",function(){
        var obj = urlLib.parse(req.url,true);
        const url = obj.pathname;
        const get = obj.query;
        const post = querystring.parse(str);

        //区分接口 或者 文件
        if (url == "/user"){ //接口
            switch (get.act) {
                case "reg":
                    if (users[get.user]){
                        res.write('{"ok" : false,"msg" : "此用户已存在"}')
                    }else{
                        users[get.user] = get.pass;
                        res.write('{"ok" : true,"msg" : "注册成功"}')
                    }
                    break;
                case "login":
                    if (users[get.user] == null){
                        res.write('{"ok" : false,"msg" : "此用户不存在"}')
                    }else if (users[get.user] != get.pass){
                        res.write('{"ok" : false,"msg" : "用户名或密码有误"}')
                    }else{
                        res.write('{"ok" : true,"msg" : "登录成功"}')
                    }
                    break;
                default:
                    res.write('{"ok" : false,"msg" : "未知的act"}');
            }
            res.end();
        }else{
            //读取文件
            var file_name = "./www" + url;
            fs.readFile(file_name,function(err,data){
                if (err){
                    res.write("404");
                } else{
                    res.write(data);
                }
                res.end();
            })
        }
    })
});

server.listen(8080);