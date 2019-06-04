const path = require("path");

var str = "E://w/aaa/a.html";

var obj = path.parse(str);
//base  文件名
//ext   扩展名    .html
console.log(obj)