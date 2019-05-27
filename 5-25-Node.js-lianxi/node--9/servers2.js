const express = require("express");

var server = express();

server.get("/a.html",function(){
   console.log("有GET");
});
// server.post("/",function(){
//     console.log("有POST");
// });
// server.use("/",function(){
//     console.log("有USE");
// });

server.listen(8080);