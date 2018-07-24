var fs = require("fs");//node 内置模块可直接引入  fs：文件系统操作模块

//读取文件
/* fs.readFile("./a.txt","utf-8",function(err,data){
	if(err) throw err;
	//读取的后续操作可写在这里
	console.log(err,data);
	//写入文件
	// fs.writeFile("./b.txt",data,function(err){
		// if(err)throw err;
	// })
	
	//追加写入文件
	fs.appendFile("./b.txt",data,function(err){
		if(err)throw err;
	})
}) */

//删除文件
/* fs.unlink("./b.txt",function(err){
	if(err)throw err;
}) */

//创建文件夹
/* fs.mkdir("c",function(err){
	if(err)throw err;
}) */

//重命名
/* fs.rename("c","d",function(err){//将c 文件夹名字 改为  d
	if(err) throw err;
}) 
fs.rename("a.txt","c",function(err){//将c 文件夹名字 改为  d
	if(err) throw err;
})*/