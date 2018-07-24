/*
http://www.cnblogs.com/chengduxiaoc/p/7003671.html
代码解释： 和原生的http请求不同，这里首先引入 express模块
然后使用 express()即可直接创建一个服务，然后通过 get设置请求的路径 ，get接收两个参数，1、请求的路径（"/" 表示当前路径，这就就算根目录），2、回调函数，回调函数包括两个参数（请求的对象，相应的对象），在回调函数内部，使用 end方法返回最后向页面返回的数据。
最后使用 app.listen监听3000端口。
当运行js之后，就可以通过浏览器访问 localhost:3000访问到服务了
 */
var express = require("express");//引入 express模块
var fs = require("fs");
var app= express();//直接创建一个服务

app.get('/',function(req,res){// 这个  /表示当前根目录  访问的时候直接   localhost:3000
    fs.readFile("./a.txt","utf-8",function(err,data){
        if(err)throw err;
        res.append(data);
    })
    res.end("hello world");
});
app.get('/a/index',function(req,res){  // 路径  /a
    res.end("you get a !");
})
app.get('/b',function(req,res){  // 路径  /b
    res.end("you get b !");
})
app.listen(3000);