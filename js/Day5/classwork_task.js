// Task 1
// Create a student profile using Template Literals and display the student's name, course, city, and institute in a formatted output.

let name="Darvin";
let course="FullStack";
let city="Chennai";
let institution="SLA";

console.log(`
    It is Student Dashboard :
    =======================================
    Student Name : ${name}
    Student Course : ${course}
    Student City : ${city}
    Student Institution : ${ institution}
    ========================================`);


// Task 2
// Create an Arrow Function that accepts employee details and calculates the yearly salary from the monthly salary.

const emp = (bal) =>{
    let y_s = bal*12;
    return y_s
}
console.log(`
    Here is Salary Of an Employee:
    Salary of Employee:${emp(10000)}
    ================================`);


// Task 3
// Create an Arrow Function that accepts a product price and discount percentage and returns the final discounted price.

const discount = (pp,dis) =>{
    let dp=pp-(pp*dis/100);
    return dp
}
console.log(`
    Here is Discount for the porduct:
    Discount and Rate= ${discount(100,50)}
    =======================================`);
// Task 4
// Create a user registration function using Default Parameters. If no role is provided, automatically assign a default role.

const registerUser = (username, role = "User") => {
    console.log(`Username: ${username}`);
    console.log(`Role: ${role}`);
};

registerUser("Darvin");
registerUser("Admin", "Administrator");
// Task 5
// Create a shopping cart function using Rest Parameters that accepts multiple product prices and calculates the total bill amount.

const cart =(...price)=>{
    let total =0;

    for(p of price){
        total+=p;
    }
    return total;
}
console.log(`
    =======================================
    Total Cart Value =${cart(100,200,300)}
    =======================================`);
// Task 6
// Given two arrays containing frontend and backend technologies, merge them into a single array using the Spread Operator.

const Frontend="HTML,CSS,JS,REACT";
const Backend="MongoDB,Nodejs";
const tech=[...Frontend,...Backend];
console.log(`
    Full Technology : ${tech}`);



// Task 7
// Create a copy of an employee object and add new properties such as department, experience, and salary without modifying the original object.

let employee = {
    name: "Darvin",
    age: 21
};

const updatedEmployee = {
    ...employee,
    department: "IT",
    experience: "2 Years",
    salary: 50000
};

console.log(employee);
console.log(updatedEmployee);
// Task 8
// Given a student object containing multiple properties, extract all values into separate variables using Object Destructuring and display them.

let student ={
    name3:"diim",
    age3:21,
    college:"Loyola"
}

const {name3,age3,college}=student;
console.log(name3);
console.log(age3);
console.log(college);

// // Task 9
// // Create an object using Enhanced Object Literals without manually assigning property names and values.

let name4 = "darvin";
let age4 = 21;
let course1 = "FullStack";

const student2 = {
    name4,
    age4,
    course1
}

console.log (student2);

// Task 10
// Create a user dashboard system that safely accesses nested properties such as profile, address, and city using Optional Chaining and displays a default value using Nullish Coalescing when data is unavailable.

let user2 = {
    profile:{
        address:{
            city:"Chennai"
        }
    }
}

const c = user2 ?.profile?.address?.city??"City Not Available";
console.log(c);


// Task 11
// Create a function that accepts multiple student marks using Rest Parameters and returns the highest mark.

const stu_marks = (...marks) =>{
    let hV= marks[0];
    for(let i=0;i<marks.length;i++){

        if(marks[i]>hV){
            hV=marks[i]
        }
    }return hV;
}
console.log(stu_marks(99,98,100,99,98));
// Task 12
// Create a function that merges multiple arrays of courses into a single array using the Spread Operator.

const a1=["React","Java","JavaScript"];
const a2=[1,2,3,4,5];
const a3=[...a1,...a2];
console.log(a3);
// Task 13
// Create a function that clones a product object and updates the stock quantity without modifying the original object.

const product2 = {
    name:"pancil",
    rate:10,
    location :"Chennai",
    stock:20
}

const new_stock =(product2,s)=>{
    return {
        ...product2,
        stock:s
    }
}

const user_product = new_stock(product2,22);
console.log(product2);
console.log(user_product);
// Task 14
// Create a function that receives a user object and displays user information using Object Destructuring and Template Literals.

const display = (user5) =>{
    const {name5,age5,college5,email}=user5;

    console.log(`
        Name : ${name5}
        Age  : ${age5}
        College : ${college5}
        Email :${email}`);
}
display({
    name5:"Darvin",
    age5 :21,
    college5:"Loyola",
    email:"dim@gmail.com"
})
// Task 15
// Build a mini Employee Management System using only ES6+ features such as:
// Arrow Functions
// Template Literals
// Destructuring
// Spread Operator
// Rest Parameters
// Default Parameters
// Optional Chaining
// Nullish Coalescing
// Enhanced Object Literals
// and implement:
// Add Employee
// Update Employee
// Display Employee
// Calculate Salary


let emplist = [];

// Add Employee

const addemp = (
    empid,
    empnam,
    empdep = "Dev",
    empsal = 30000
) => {

    const empobj = {
        empid,
        empnam,
        empdep,
        empsal
    };

    emplist = [...emplist, empobj];

    console.log(`Employee Added Successfully`);
};

// Display Employee

const disemp = () => {

    emplist.forEach(({ empid, empnam, empdep, empsal }) => {

        console.log(`
Employee ID     : ${empid}
Employee Name   : ${empnam}
Department      : ${empdep}
Salary          : ${empsal}
`);
    });
};

// Update Employee

const updemp = (empid, updobj) => {

    for (let i = 0; i < emplist.length; i++) {

        if (emplist[i].empid === empid) {

            emplist[i].empdep = updobj.empdep;
            emplist[i].empsal = updobj.empsal;

            console.log(`Employee ${empid} Updated`);
            return;
        }
    }

    console.log("Employee Not Found");
};

// Yearly Salary

const yrsal = (empid) => {

    const empdat = emplist.find(
        empobj => empobj.empid === empid
    );

    const yramt = empdat?.empsal * 12 ?? 0;

    console.log(`
${empdat?.empnam ?? "Employee"}
Year Salary : ${yramt}
`);
};

// Usage

addemp(1, "Darvin", "Front", 50000);
addemp(2, "John");

disemp();

updemp(2, {
    empdep: "BackEnd",
    empsal: 60000
});

disemp();

yrsal(1);
yrsal(2);