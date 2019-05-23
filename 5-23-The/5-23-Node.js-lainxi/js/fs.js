const fs = require('fs');

//readFile(文件名，回调函数)
fs.readFile("../aa.txt",function (err,data) {
    if (err){
        console.log("错误的读取")
    }else{
        console.log(data.toString())
    }
})


//readFile(文件名，内容，回调函数)
fs.writeFile("bb.txt","dasdasdadaad",function (err) {
    console.log(err)
})