var mongo = require("mongodb");
var assert = require("assert");

var MongoClient= mongo.MongoClient;

var Urls = "mongodb://localhost:27017/wangDb";

MongoClient.connect(Urls,function(err,db){
    assert.equal(null,err);

    db.collection("t1").find({name:"zhang",age:{$lt:5}}).toArray(function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    })
})