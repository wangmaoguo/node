function fn01(data,callback){
    if(data){
        callback("",data);
    }else{
        var err = new Error("错误了");
        callback(err);
    }
}

fn01("01",function(err,data){
    if (err){
        console.log("错误"+err);
    }else{
        console.log(data);
    }
})

fn01("",function(err,data){
    if (err){
        console.log("错误"+err);
    }else{
        console.log(data);
    }
})