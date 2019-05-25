const http = require("http");
const request = require("request");

const server = http.createServer(function (req,res) {
    //设置编码
    res.setHeader("Content-type","text/plain;charset=UTF-8");
    //设置允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    request.get("http://api.zhuishushenqi.com/book/auto-complete" + req.url,function (error,response,body) {
        res.end(body);
    });
});
server.listen(8080);