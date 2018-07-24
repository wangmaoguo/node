var mongo = require("mongodb");
var assert = require("assert");

var MongoClient = mongo.MongoClient;

var urls = "mongodb://localhost:27017/wangDb";
MongoClient.connect(urls,function(err,db){
    assert.equal(null,err);

    /*
    //删除一条
    db.collection("t1").deleteOne({"name":"test22"},function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    })
    */
   //删除符合条件的全部
   db.collection("t1").deleteMany({"name":"zhang"},function(err,result){
    assert.equal(null,err);
    console.log(result);
    db.close();
})
})