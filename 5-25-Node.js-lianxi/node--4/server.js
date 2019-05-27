const http = require("http");
// 2const querystring = require("querystring");

const urlLib = require("url");

http.createServer(function (req,res) {
    // var GET = {};
    //
    // if (req.url.indexOf("?") != -1) {
    //     var arr = req.url.split("?")[1];
    //     // 1.var arr2 = arr.split("&");
    //     // 1.for (var i = 0;i<arr2.length;i++){
    //     // 1.    var arr3 = arr2[i].split("=");
    //     // 1.    GET[arr3[0]] = arr3[1];
    //     // 1.}
    //     //2.GET=querystring.parse(arr);
    // }else{
    //     var url = req.url;
    // }
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        var GET = obj.query;


    console.log(url,GET)
    res.write("aaa");
    res.end();
}).listen(8080);