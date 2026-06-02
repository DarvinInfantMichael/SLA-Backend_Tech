// Task - 1

var name = "Darvin";
console.log("Before" ,name);

var name = "Infant";
console.log("After Redeclared" ,name);

let age = 21;
console.log("This is Declarartion", age);

age = 22;
console.log("This Redeclared",age);

// let age = 23;
// console.log(age);
// When I redeclared keyword with variable name as let age it occurs error as uncaught syntaxerror - identifier 'age' has been alrerady been declared .

const state = "TamilNadu";
console.log("This is constent",state);

// const state = "Bangalore";
// console.log("This is constant",state);
// When I Redeclared and Reassigned it occurs error as uncaught syntaxerror - identifier 'age' has been alrerady been declared . 

// Task - 2

// Gobal Scope , Functional Scope , Block Scope

var gV = "This is Global";

function testingScopes (){

    var fV = "This is Functional";

    if(true){

        var bV = "This is Block";

        console.log ("Here ",gV); //Accessible
        console.log ("Here ",fV); //Accessible 
        console.log ("Here ",bV); //Accessible
    }
    console.log("Now is out from Block" , gV); //Accessible
    console.log("Now is out from Block" , fV); //Accessible
}
testingScopes();
console.log(gV); //Accessible
// console.log(fV); It gives Error not defined 

//Task-3

const grandParent = () => {
    let grandParentVar = "I am from GrandParent";

    const parent = () => {
        let parentVar = "I am from Parent";

        const child = () => {
            console.log(grandParentVar);
            console.log(parentVar);
        };

        child();
    };

    parent();
};

grandParent();
// Here child function can able to use the parent and grandparent variables but parent and grandparent functoions not able to use the child fucntion variable .

//Task-4 Scope Chain Search:

const company = "SLA";

const level1 = () => {

    const level2 = () => {

        const level3 = () => {
            console.log(company);
        };

        level3();
    };

    level2();
};

level1();
// Using const scope chain is the process that looks for a variable. It starts in the current scope and moves outward through parent scopes until the variable is found or the global scope is reached. In this example, level3() accesses company from the global scope through the scope chain it also applied for var and let

//Task-5 Hoisting Prediction

console.log(a);
var a = 100;
//Here in Hoisting the user intialized the variable but user tried to access them before declaration that makes declaration part move to the top of the scope .

//Task 6: TDZ Investigation

// console.log(username);
// let username = "Sudhan";

// op:ReferenceError: Cannot access 'username' before initialization

// Explain:The Temporal Dead Zone (TDZ) is the time between entering a scope and executing the declaration of a let or const variable. Accessing the variable during this period results in a ReferenceError because it has been hoisted but not yet initialized.

// TDZ Start - When the value and variable assign it assign the memory and TDZ has beed started for temporarily.

// TDZ End - When the variable get called then TDZ get Destroyed and thats TDZ ends.
// Why ReferenceError occurs - We try to access the variable beofre it initialized.

//Task-7
// Task 7: Execution Context

const greet2= () => {
  console.log("Hello");
};

greet2();
// step 1:Global Execution Context Created

// step 2:greet() Invoked

// step 3:Function Execution Context Created

// step 4:console.log("Hello")

// step 5:Output: Hello

// step 6:Function Execution Context Destroyed

// step 7:Execution Complete


// Global Execution Context (GEC) --> Created when a JavaScript program starts. Stores variables,objects,functions
// Function Execution Context (FEC) --> Created whenever a function is called. Stores local variables and destroyed automatically after function executed


//Task 8: Type Conversion Challenge Without using Google, predict outputs:

console.log("10" + 5);         //String Concatenation ,so op:105

console.log("10" - 5);         //String converted to number ,so op:5

console.log(true + 1);         //true becomes 1 , so op:2

console.log(false + 10);       //false becomes 0 , so op:10

console.log(Number("100"));    //Explicit string → number conversion ,so op:100

console.log(String(500));      //Explicit number → string conversion ,so op:"500"

//Primitive vs Non-Primitive

// Primitive Data Types - Stack Storage

let str = "dim";
console.log(typeof(str));// String
let num = 100;           
console.log(typeof(num));// Number
let isStudent = true;         
console.log(typeof(isStudent));// Boolean
let value;                     
console.log(typeof(value));// Undefined
let empty = null;          
console.log(typeof(empty));// Null
let bigNum = 1234567890123456789n;
console.log(typeof(bigNum));// BigInt
let uniqueId = Symbol("id");
console.log(typeof(uniqueId));// Symbol

// Non-Primitive Data Types - Heap Storage

let person = {                     
    name: "Darvin",
    age: 20
};
console.log(typeof(person));

let colors = ["Red", "Blue"]; 
console.log(typeof(colors));     

function greet() {                 
    console.log("Hello");
}
console.log(typeof(greet));

//Task 10:

// Hoisting Example
console.log(a); // undefined

var a = 100;

// TDZ Example

// console.log(userName);
// ReferenceError: Cannot access 'userName' before initialization

let userName = "Darvin";

// Global Scope
const company1 = "SLA";

// Function Scope + Lexical Scope
function outer() {

    // Function Scoped Variable
    var department = "IT";

    console.log("Inside outer function");

    if (true) {

        // Block Scoped Variable
        let batch = "MERN Stack";

        console.log("Batch:", batch);

        function inner() {

            // Lexical Scope Access
            console.log("Company:", company1);
            console.log("Department:", department);
            console.log("Batch:", batch);

            // Type Conversion
            console.log("10" + 5);
            console.log("10" - 5);
            console.log(true + 1);
            console.log(Number("100"));
            console.log(String(500));
        }

        // Function Call
        inner();
    }
}

outer();
// Memory Creation Phase: Memory is allocated for variables and functions.
// Execution Phase: Code runs line by line.
// Scope Creation: Scopes are created to control variable access.
// Variable Lookup Process: Variables are searched through the scope chain.

// Bonus Interview Task 
// outputs:
// 10
// 20
// 52




