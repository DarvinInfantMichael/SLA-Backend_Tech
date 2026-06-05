//1).Task 1 - Bank Account Using Closure

// Create a closure-based bank account system.

// Features:

// Initial Balance = 5000

// Deposit Amount

// Withdraw Amount

// Check Balance

// Use closure to keep balance private.

const BankAccount = () =>{

    let balance = 5000;

    return {
        Deposit : (amt) =>{
            balance+=amt;
            console.log(`Deposited : ${amt}`);
        },

        Withdraw : (amt) =>{
            if(amt <= balance){
                balance-=amt;
                console.log(`Withdraw :${amt}`);
            }else{
                console.log("Insufficient balance");
            } 
        },

        checkBalance : () =>{
            console.log(`currentBalance : ${balance}`);

        }


    }
}
const data = BankAccount();

data.checkBalance();
data.Deposit(2000);
data.checkBalance();
data.Withdraw(3000);
data.checkBalance();

//2).Create a closure that maintains attendance count.

// Requirements:

// Every function call increases attendance.

// Display current attendance count.

// Count should not reset.

const mainAttendance = () =>{
    let count=0;
    return {function :() =>{
        count++;
        console.log(`Attendance Marked : ${count}`);
    }}
}
const student=mainAttendance();
student.function();
student.function();
student.function();

//3).Create a closure-based visitor counter.

// Requirements:

// Each visit should increase count.

// Display total visitors.

// Counter value should remain preserved.

const VisitorCounter = () =>{
    let count=0;
    return {
        visit :()=>{
            count++;
            console.log(`visited count:${count}`);
        },
        totalvisit :()=>{
            console.log(`Total visit : ${count}`);
        },
        CCounter :()=>{
            console.log(`Counter Value:${count}`);
        }
    }
}
const vsit = VisitorCounter();
vsit.visit();
vsit.visit();
vsit.totalvisit();
vsit.CCounter();

//4).Create a closure for cart management.

// Requirements:

// Add product.

// Remove product.

// Display total items.

// Item count should remain private.

const shopping =()=>{
    let productCount=0;
    return{
        Addproduct : () =>{
            productCount++
            console.log(`Product Added to Cart : ${productCount}`);
        },
        Removeproduct : () =>{
            if(productCount>0){
                productCount--;
                console.log(`Porduct Removed from cart:${productCount}`);
            }else{
                console.log("Items to add first");
            }
        },
        Itemcount :()=>{
            console.log(`Item count:${productCount}`);
        }
        
    }
}
const user = shopping();
user.Itemcount();
user.Addproduct();
user.Addproduct();
user.Itemcount();
user.Removeproduct();
user.Itemcount

//5).Create a closure-based ATM system.

// Requirements:

// Withdraw money.

// Check balance.

// Prevent withdrawing more than available balance.

// Balance should remain private.

const Atm =()=>{
    let balance=1000;
    return {
        wd : (amt)=>{
            if(balance>=amt){
                balance-=amt;
                console.log(`Balance Amount:${balance}`);
            }else{
                console.log("Limit Out of Balance");
            }
        },
        check : ()=>{
            console.log(`current balance:${balance}`);
        }
    }
}
const userdata = Atm();
userdata.check();
userdata.wd(500);
userdata.check();
userdata.wd(2000);
userdata.check();

//6).Create a closure.

// Requirements:

// Every login attempt increases count.

// Display current attempt number.

// Count should remain preserved.

const userlogin = () =>{
    let count =0;
    return {
       login : ()=>{
        count++;
        console.log(`user logined now:${count}`);
       } ,
       Attempt_n0 : ()=>{
        console.log(`It is Attempt :${count}`);
       }
    }
}
const log=userlogin();
log.login();
log.login();
log.login();
log.Attempt_n0();

//7).Create a function:

// processPayment(callback)
// Create separate callbacks for:

// GPay

// PhonePe

// Paytm

// Inject each callback dynamically.

const MoneyTransfer =(cb)=>{
    cb();
}
const GPay=()=>{
    console.log("Welcome to GPay :) ");
}
const PhonePay=()=>{
    console.log("Welcome to PhonePay :) ");
}
const Paytm=()=>{
    console.log("Welcome to Paytm :) ");
}
MoneyTransfer(GPay);
MoneyTransfer(PhonePay);
MoneyTransfer(Paytm);

//8).Create a function:

// executeAction(callback)
// Create separate callbacks for:

// Login

// Logout

// Register

// Execute all actions using callback injection.

const user1 = (cb) =>{
    cb();
}
const Login = ()=>{
    console.log("User is Login");
}
const Register =()=>{
    console.log("User is Register");
}
const Logout =()=>{
    console.log("User is Logout");
}
user1(Login);
user1(Register);
user1(Logout);

//9).Create a notification system.

// Requirements:

// Print:

// Sending Notification...
// After 3 seconds print:

// Notification Sent
// Use:

// setTimeout()
// and arrow functions.

const sendingNotify =()=>{
    console.log("Sending Notification..........");

    setTimeout(()=>{
        console.log("Notification Sent")
    },3000);
}
sendingNotify();

//10).Create an order processing system.

// Requirements:

// Maintain order count using Closure.

// Accept a callback using Callback Injection.

// Use setTimeout to simulate processing delay.

// Display:

// Order Number
// Processing...
// Order Completed
// Different callbacks:

// Mobile Order

// Laptop Order

// TV Order

// const customer =(cb)=>{
//     let order_count=0;
//     cb();
// }
// const Mobile_Order =()=>{
//     order_count++;
//     console.log(`Order No : ${order_count}`);
//     setTimeout(()=>{
//         console.log("Order processing.....")
//     },3000);
//     console.log("Mobile Order Completed Successfully.");
// }

// const Laptop_Order=()=>{
//     order_count++;
//     console.log(`Order No:${order_count}`);
//     setTimeout(()=>{
//         console.log("Order Processing......");
//     },3000);
//     console.log("Laptop Order Completed Successfully.");
// }

// const TV_Order =()=>{
//     oreder_count++;
//     console.log(`Order No: ${oreder_count}`);
//     setTimeout(()=>{
//         console.log("Order Processing.......")
//     },3000);
//     console.log("TV Order Completed Successfully.");
// }
// const Total_Order =()=>{
//     console.log(`Total Order Count : ${order_count}`);
// }

// const customer_wish=customer();
// customer_wish(Total_Order);
// customer_wish(TV_Order);
// customer_wish(TV_Order);
// customer_wish(Mobile_Order);
// customer_wish(Laptop_Order);
// customer_wish(Total_Order);

const customer = () => {
    let order1Count = 0; // closure

    return (callback) => {
        order1Count++;
        console.log(`Order Number: ${order1Count}`);
        console.log("Processing...");

        setTimeout(() => {
            callback();
            console.log("Order Completed");
        }, 5000);
    };
};

const MobileOrder = () => {
    console.log("Mobile Order");
};

const LaptopOrder = () => {
    console.log("Laptop Order");
};

const TVOrder = () => {
    console.log("TV Order");
};

const customerWish = customer();

customerWish(MobileOrder);
customerWish(LaptopOrder);
customerWish(TVOrder);


