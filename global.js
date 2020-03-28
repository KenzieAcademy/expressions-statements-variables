
// Welcome! Here's an example of a console logged response
console.log(4 + 5);

/***********************/
/* Part 1: Expressions */
/***********************/

//1.) Log an expression that evaluates to the sum of two integers
let a = 2;
let b = 1;
console.log(a+b);

// 2.) log an expression that evaluates to the difference of two integers
let c = 5;
let d = 2;
console.log(c-d);

// 3.) Log an expression that concatenates the two strings "I'm writing" and "my first JavaScript code"
let e = "I'm writing";
let f = "my first JavaScript code";
console.log(e,f);

// 4.) Log an expression that evaluates to true or false using two numbers that are greater or less than eachother
// your code here 
let g = 23;
let h = -23;
console.log(g>h);

// 5.) Log an expression that uses modulo, with a result of 4
// your code here
let i = 9;
let j = 5;
console.log(i%j);

/**********************/
/* Part 2: Statements */
/**********************/

// 6.) Assign a variable and console log the declaration
let k = 897657;
k = 2;
console.log(k);

// 7.) Console log a variable assigned to the sum of two numbers
let l = 5;
let m = 3;
let n = l+m;
console.log(n);

// 8.) Uncomment this if else statement and add a logical expression as the condition
if (n > k) {
    console.log('It was!')
} else {
    console.log('It was not..')
}

// 9.) Add parenthesis to the following statement, the result should be 1
let answer = (3 * 3 + 1) / ((8 + 12) / 2);
console.log(answer == 1); // This should log true