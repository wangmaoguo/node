var mongo = require("mongodb");
var assert = require("assert");

var MongoClient = mongo.MongoClient;

var urls = "mongodb://localhost:27017/wangDb";
MongoClient.connect(urls,function(err,db){
    assert.equal(null,err);

    //更新一条
    /*
    db.collection("t1").update({"name":"zhang"},{$set:{"name":"wang"}},function(err ,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    })
    */
   //更新多条数据
    db.collection("t1").updateMany({"name":"zhang"},{$set:{"name":"wang"}},function(err ,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    })
})