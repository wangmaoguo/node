/*
访问静态资源
http://www.cnblogs.com/chengduxiaoc/p/7003671.html
代码解释：1/2行引入了两个模块，3行生成一个服务，5行设置静态资源路径。参数中的 path.join方法可以将两个路径拼接成路径的字符串 ， __dirname表示当前路径的名称。和 files拼接，就成成了  "D:\nodeTest\exTest\files" ，就可以访问到里面的图片和网页了。
6行表示将5行设置的静态资源路径使用到当前服务上。
 */
var express = require("express");//引入 express模块
var path = require("path");
var app= express();//直接创建一个服务

var files = express.static(path.join(__dirname,"files"));//设置静态资源路径
app.use(files);//use这个路径设置 才可以 真正使用  

app.listen(3000);
