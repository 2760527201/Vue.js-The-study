const express = require("express");
const bodyParser = require("body-parser");

var server = express();
server.use(bodyParser.urlencoded({extended : false}));

server.post('/',function (req,res) {
    console.log(req.body);
});

server.listen(8080)