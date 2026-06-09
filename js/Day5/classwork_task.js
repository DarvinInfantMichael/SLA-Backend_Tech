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

const employee = {
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

const student ={
    name:"diim",
    age:21,
    college:"Loyola"
}

const {name,age,college}=student;
console.log(name);
console.log(age);
console.log(college);

// Task 9
// Create an object using Enhanced Object Literals without manually assigning property names and values.



// Task 10
// Create a user dashboard system that safely accesses nested properties such as profile, address, and city using Optional Chaining and displays a default value using Nullish Coalescing when data is unavailable.