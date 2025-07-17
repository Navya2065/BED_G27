const fs=require('fs');
const io=require('./io/io');
// fs.readFile("../demonew.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     //console.log(data[0]);
//     let users=JSON.parse(data);
//     console.log(users[0]);
// })

async  function readUsers() {
    let users=await read("../users.txt");
    let user2=await read("../users2.txt");
    console.log(users);
    console.log(users2);
}
readUsers();