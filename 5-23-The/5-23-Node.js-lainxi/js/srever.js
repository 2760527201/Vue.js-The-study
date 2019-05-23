const http = require('http');

var server = http.createServer(function (request,response) {
    //request 输入-请求的信息
    //response 输出-输出的东西

    //favicon.ico 高级浏览器  自动请求数据
    // response.write("abc");


    switch(request.url){
        case '/1.html':
            response.write("111111");
            break;
        case '/2.html':
            response.write("222222");
            break;
        case '/3.html':
            response.write("333333");
            break;
        default :
            response.write('404');
            break;
    }
    response.end();
});

//监听
//端口
server.listen(8080);
