//1). Create an arrow function that accepts a student's first name and last name and returns the full name.

const students = (fN,lN) => {
    const res=(fN+" "+lN)
    return res
}
console.log(students("Darvin","Michael"));

//2).Create an arrow function that accepts a product price and quantity and returns the total amount.

const product = (price , quantity) =>{
    const total = price*quantity;
    return total;
}
console.log(product(500,5));

//3).Create an arrow function that accepts a person's age and returns whether they are eligible for voting.

const voting = (age) =>{
    const res = age>=18 ? "You eligible to vote":"Not eligible to vote";
    return res;
}
console.log(voting(22));

//4).Create an arrow function that accepts three numbers and returns the largest number.

const largest = (...num) =>{
    const max = num[0];
    for(let i=1;i<num.length;i++){
        if(max < num[i]){
            max=num[i];
        }
    }
    return max;
}
console.log(largest(7,6,5));

//5).Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const getuser = (username="Guest")=>username;
console.log(getuser("Darvin"));
console.log(getuser());

//6).Create an arrow function that accepts two numbers and returns:

// Sum

// Difference

// Multiplication

// Division

const operations = (a,b)=>({
    sum:a+b,
    difference:a-b,
    multiplication:a*b,
    division:a/b
})
console.log(operations(50,20));

//7).Create an arrow function that accepts marks of 5 subjects and returns the total and average.

const mark = (m1,m2,m3,m4,m5) =>{
    const total = m1+m2+m3+m4+m5;
    const avg = total/5;
    return ({
        total,avg
    })
}
console.log(mark(1,2,3,4,5));

//8).Create an arrow function that accepts a salary amount and returns:

// HRA = 20%

// DA = 10%

// Total Salary

const emp = (amt) =>{
    const hra = amt*20/100;
    const da =amt*10/100;
    const total = hra + da + amt;

    return ({
        hra,da,total
    })
}
console.log(emp(1000));

//9).Create an arrow function that accepts a temperature in Celsius and converts it to Fahrenheit.

const tempTofahren = (cel) =>(cel*9.5)+32;
console.log(tempTofahren(25));

//10).Create an arrow function that checks whether a given number is even or odd.

const check = (num) =>{
    return num%2===0 ? "Even":"Odd";
}
console.log(check(17));
console.log(check(10));

//11).Create an arrow function that accepts a string and returns the length of the string.

const string = (str) =>{
    return str.length;
}
console.log(string("darvin"));

//12).Create an arrow function that accepts a name and prints the name multiple times based on a count parameter.

const fun = (name,count)=>{
    for(let i=1;i<count;i++){
        console.log(name);
    }
}
fun("Darvin",5);

//13).Create an arrow function that accepts multiple marks using Rest Parameters and returns the total marks.

const totalMark = (...mark) =>{
    let total =0;
    for(const m of mark){
        total +=m;
    }
    return total;
}
console.log(totalMark(10,20,30));

//14).Create an arrow function that accepts multiple numbers using Rest Parameters and returns the largest number

const largestNum = (...num) =>{
    let largest=num[0];
    for(let i=1;i<num.length;i++){
        if(largest<num[i]){
            largest=num[i];
        }
    }
    return largest;
}
console.log(largestNum(10,20,50,30,40,55));

//15).Create an arrow function that accepts multiple numbers using Rest Parameters and returns the smallest number.

const sNum = (...num) =>{
    let small=num[0];
    for(let i=1;i<num.length;i++){
        if(small>num[i]){
            small=num[i];
        }
    }
    return small;
}
console.log(sNum(10,20,50,30,40,55));

//16).Create an arrow function that accepts multiple product prices using Rest Parameters and returns the total bill amount.

const products = (...price)=>{
    let total = 0;

    for(const p of price){
        total+=p;
    }
    return total;
}
console.log(products(50,60,50,70));




