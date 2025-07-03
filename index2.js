const fs=require ("fs");
console.log(fs);
console.log("start");

setImmediate(()=>{
    console.log("set Immediate");
})
setTimeout(()=>{
  console.log("settimeout");
},0);
fs.readFile("demo.txt","utf-8",(data)=>{
  console.log(data);
  setTimeout(()=>{
    console.log("time2");
  },0)
  setImmediate(()=>{
    console.log("immediate 2");
  })
})
console.log("end");