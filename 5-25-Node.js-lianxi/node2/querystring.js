const querystring=require('node2/querystring');

var json=querystring.parse("user=blue&pass=123456&age=18");
console.log(json);
