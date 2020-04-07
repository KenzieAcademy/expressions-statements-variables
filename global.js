
// Welcome! Here's an example of a console logged response
console.log(4 + 5)

/***********************/
/* Part 1: Expressions */
/***********************/

//1.) Log an expression that evaluates to the sum of two integers
let x = 2;
let y = 5;
let z = x + y;
console.log(z);

// 2.) log an expression that evaluates to the difference of two integers
// your code here 
let x = 12;
let y = 8;
let z = x - y;
console.log(z);

// 3.) Log an expression that concatenates the two strings "I'm writing" and "my first JavaScript code"
// your code here
let x = "I'm writing ";
let y = "my first JavaScript code.";
let z = x + y;
console.log(z);

// 4.) Log an expression that evaluates to true or false using two numbers that are greater or less than each other
// your code here
let x = 12;
let y = 3;
if (x > y) {
    answer = "true";
} else {
    answer = "false"
}
console.log(answer);

// 5.) Log an expression that uses modulo, with a result of 4
// your code here
let x = 18;
let y = 7;
let z = x % y;
console.log(z);

/**********************/
/* Part 2: Statements */
/**********************/

// 6.) Assign a variable and console log the declaration
// your code here 
var x;
x = "I did it!"
console.log(x);

// 7.) Console log a variable assigned to the sum of two numbers
// your code here
var x
x = 2 + 2;
console.log(x);

// 8.) Uncomment this if else statement and add a logical expression as the condition
x = 7;
y = 2;
if (x < y) {
   console.log('true')
} else {
   console.log('false')
}

// 9.) Add parenthesis to the following statement, the result should be 1
let answer = (3 * 3 + 1) / ((8 + 12 )/ 2);
console.log(answer == 1); // This should log true