/*
1行2行引入了需要的两个模块，4行开启服务器，
6行是url的地址，一般默认安装的时候地址和端口是 “mongodb://localhost:27017”，后面的demo2是我的mongodb的数据库的名字（你替换成你自己创建的数据库即可）
8行是根据上面声明的url去和数据库建立连接，connect方法有两个参数，1、连接的数据库地址，2、回调函数，回调函数两个参数表示发送错误，以及正确的情况下返回数据库的链接，我们就可以在此链接上进行操作了。
注意：这里的链接是初学者常报错的地方，如果报错，去确认地址和数据库名字是否填错，确保自己的数据库中有对应的库名字。
重点讲解下 13行，这里是node插入数据库的操作， db.collection("t1")表示获取需要操作的表，  insert是插入方法，方法接收两个参数，1、插入的内容，2、回调函数，回调函数两个参数表示发送错误，以及正确的情况下返回的结果。
15行打印出错结果，16行关闭和数据库的链接（如果一直连着，浏览器会崩溃）
*/
var mongo = require("mongodb");//引入mongodb模块
var assert = require("assert");//引入断言模块

var MongoClient = mongo.MongoClient;//开启服务

var Urls = "mongodb://localhost:27017/demo2";//url储存  放在连接池中。

MongoClient.connect(Urls,function(err,db){//获取连接
    assert.equal(null,err);//使用断言模块代替以前的 if判断

    //插入数据
    db.collection("t1").insert({"name":"xitong"},function(err,result){//连接到数据库上面，并使用参数传入集合
        assert.equal(null,err);
        console.log(result);
        db.close();
    })
})