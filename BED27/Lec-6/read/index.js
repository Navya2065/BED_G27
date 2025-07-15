const fs=require("fs");
fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    console.log(data)

fs.readFile("../demo2.txt","utf-8",function(err,data2){
    if(err) return console.log(err);
    console.log(data)

const data=data1+data2;
fs.writeFile("../merged.txt",data,"utf-8",function(err,data)
{
    if(err) return console.log(err);
    console.log(data);
})
})
})


//assignment 
//10 marks
//1).file  me data write karna h write (input) data in file demo.txt
//data will be passed using terminal
//