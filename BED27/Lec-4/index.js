let account_balance=10000;

let products=[{
    name:"samsung",
    amount:70000,
    quantity:10
},{ name:"Iphone 16",
    amount:90000,
    quantity:5
}
]



// function buyProduct(product_name,cb){
//     //some asynchronous operation
//     //1.get product details from db
//     //2.write order detail in user db
//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }
buyProduct("Iphone 16",function(err,amount){
    if(err)return  console.log(err);
    
  console.log(amount);
  deductAmount(amount,function(err,message){
    if(err)return console.log(err);
    console.log(message);
  });
})
function buyProduct(product_name,cb){
    let isProduct=null;
    //find product obejct from product array whose name is equal to product_name
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_name){
           isProduct=products[i];
        }
    }
    if(!isProduct){
        cb("product is not avaiable",null);
    }else{
        cb(null,isProduct.amount);
    }
   
}


function deductAmount(amount,cb){
    if(amount<=account_balance){
        account_balance-=amount;
        cb(null,"your product is purchased");
    }else{
        cb("Insufficient balance",null);
    }
}

//problems in callback
//1.callback hell readibility kam hoti h
//2.dont have control on your own