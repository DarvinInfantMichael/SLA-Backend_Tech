const addDate = () =>{
    let count =0;
    return inner=()=>{
        count ++
        console.log(count);
    }
}
const counter = addDate();
counter();
counter();

// const Bank = (amt) =>{

//     let balance =1000;

//     return {
//         withdraw : (amt)=>{
//             if(amt>balance){
//                 console.log("Balance not found");
//             }
//             else{
//             balance -=amt
//                 console.log(balance);
//             }
//         },
//         savings : (amt)=>{
//             balance +=amt
//             console.log(balance);
//         },
//         balance : ()=>{
//             console.log(balance);
//         }
//     }
    
//     }

//     const data=Bank();
//     data.withdraw(500);
//     data.savings(1000);
//     data.balance();

const Bank = (cb,amt) =>{
    cb(amt);
}
const withdraw = (amt)=>{
    console.log("here you withdraw",amt);
}
const savings = (amt) =>{
    console.log("here you savings",amt);
}
const balance =(amt) =>{
    console.log("here you balance",amt);
}

Bank(withdraw,500);
Bank(savings,200);
Bank(balance,100);


    