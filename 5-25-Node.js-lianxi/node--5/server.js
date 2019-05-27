const http = require("http");

const querystring = require("querystring");

http.createServer(function(req,res){
    //接收数据
    var str = "";
    //有一段时间到达 （很多次）
    var i = 0;
    req.on("data",function(data){
        console.log("第"+ i++ + "次接受数据");
        str += data;
    });
    //数据全部到达 （一次）
    req.on("end",function(){
        // console.log(str)
        var POST = querystring.parse(str);
        console.log(POST)
    });
}).listen(8080);