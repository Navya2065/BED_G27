 //port is a communication endpoint
 //1500 1200 se uper ke ports we can use
 //node js architecture-event driven
 // runtime env,asynchronous,non blocking,event driven
//client server architecture
//agar server nhi milega toh load hoga and then refuse to connect
//if / ye nhi dala toh cannot get/ ayega
 const express=require("express")
 const app=express()
 console.log(app);

app.get("/",(req,res)=>{
    console.log(req);
    //res.send("hewllo world")
   // res.send("<h1>hello world");
   res.json({
    name:"navya",
    address:"delhi",
    isLogin:true
   })
})
//path params

//1
//1)params
//2)query params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    res.send("ok");
})

app.get("/blogs",(req,res)=>{
    console.log(req.query);
    res.send("got it");
})

 app.listen(3000,()=>{
    console.log("server started");
 })