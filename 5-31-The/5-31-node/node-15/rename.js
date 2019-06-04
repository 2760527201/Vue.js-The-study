const fs = require("fs");

fs.rename("a.text","b.text",function (err) {
    console.log(err)
})