var express = require("express");
var route = express.Router();//获取路由对象

route.get("/",function(req,res){
    res.send("首页")
})

route.get("/edit",function(req,res){
    return res.redirect("/点击编辑.html"); //res.redirect（）表示重定向url
})

route.get("/img",function(req,res){
    res.send("<img src='1.png' />");
})

module.exports =  route;