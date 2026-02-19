let firstName = "mahmoud";
let lastName = "taher";
console.log(firstName + " " + lastName);

var x =10 ;
console.log(typeof x);

var name = "ahmed";
console.log(typeof name);

let isempty= true;
console.log(typeof isempty);

let mynull= null;
console.log(typeof mynull);

let data;
console.log(data);

let person ={
    age: 26 
};
console.log(typeof person);

let a = 15;
let b = 4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
console.log(a>b);


let num =10;
if(num % 2 === 0){
    console.log("even number")
}else{
    console.log("odd number")
};


let s= 5;
let j= 9;
let temp = s;
s=j;
j=temp;
// console.log(s);
console.log(j);


let n1 = 10;
let n2 = 30;
let n3 = 35;

if (n1 >= n2 && n1 >= n3) {
    console.log("The largest value is:", n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("The largest value is:", n2);
} else {
    console.log("The largest value is:", n3);
}

 
let value = 8; 

if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
};

let score = 85; 

if (score >= 90 ) 
    {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else if (score >= 0) {
    console.log("Grade: F");
} else {
    console.log("Invalid Score");
}



let username = "admin";
let password = 1234;
let inputuser = "admin";
let inputpassword = 134;
if (inputuser !== username){
    console.log("user not found");
}else if (inputpassword !== password){
    console.log("wrong password");
}else{
    console.log("welcome admin");
}

let num1 = 10;
let num2 = 2;
let op = "*";

let result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
} else {
    result = "Invalid Operator"; 
}
console.log(result);



let min = 130;
let hours= Math.floor(min/60);
let remaining_minutes=min %60;
console.log(min + " minutes = " + hours + " hours and " +remaining_minutes + " minutes ");




let price = 450; 
let hasCoupon = true;
let finalPrice;

if (price >= 1000) {
    finalPrice = price - (price * 0.20);
    console.log(finalPrice);
} else if (price >= 500) {
    finalPrice = price - (price * 0.10);
    console.log(finalPrice);
} else {
    console.log("no discount"); 
}


function greetUser(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName ;
}
console.log(greetUser("Ali", "Hassan")); 


let age = 13; 
if (age < 12) {
    console.log("Child");
} else if (age >= 12 && age <= 17) {
    console.log("Teen");
} else if (age >= 18 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior");
}
