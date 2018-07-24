/*异步IO的操作，像水流一样流出一段取得一段*/
var fs = require("fs");
var data="";
var rs = fs.createReadStream("a.txt");//创建读取流对象
var ws = fs.createWriteStream("b.txt");//创建写入流

rs.setEncoding("utf-8");
//监听“data”读取数据的事件
rs.on("data",function(data1){
    //data+=data1;
    ws.write(data1,"utf-8");//向文件写入东西
    console.log(".....");//读的过程中，我们打印三个点。
})
//读取完毕， 触发“end”事件
rs.on("end",function(){
    console.log("没有数据了");
    ws.end();                 //关闭写入流
})