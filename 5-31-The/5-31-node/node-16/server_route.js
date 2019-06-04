const express = require("express");

var server = express();

//目录1： /user
//创建router
var routeUser = express.Router();

//route内部
routeUser.get('/1.html',function (req,res) {
    res.send('user1')
});
routeUser.get('/2.html',function (req,res) {
    res.send('user222')
})

//把router添加到server  告诉他目录
server.use('/user',routeUser)


//目录2： /article
var articleUser = express.Router();
articleUser.get('/1001.html',function (req,res) {
    res.send('srticle1')
});
articleUser.get('/1002.html',function (req,res) {
    res.send('srticle2')
})

//告诉他目录
server.use('/article',articleUser)
server.listen(8080);