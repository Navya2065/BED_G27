const fs=require('fs');
let users=[{
    id:1,
    name:"dev",
    age:"20"
},{
    id:2,
    name:"navya",
    age:21
}
]
// fs.writeFile("../demonew.txt",JSON.stringify(users),function(err,data){
//     if(err){
//         return console.log(err);
//         console.log("users written");
//     }
// })
fs.writeFile("../users2.txt",JSON.stringify(users),function(err,data){
    if(err){
        return console.log(err);
        console.log("users written");
    }
})