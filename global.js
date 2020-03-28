
// Welcome! Here's an example of a console logged response
console.log(4 + 5)

/***********************/
/* Part 1: Expressions */
/***********************/

//1.) Log an expression that evaluates to the sum of two integers
let answer1 = (1 + 2); 
console.log('answer 1');
console.log(answer1);

// 2.) log an expression that evaluates to the difference of two integers
let answer2 = (10 - 2); 
console.log('answer 2');
console.log(answer2);

// 3.) Log an expression that concatenates the two strings "I'm writing" and "my first JavaScript code"
console.log('answer 3');
const str1="I'm writing" 
const str2="my first JavaScript code" 
console.log(str1.concat(' ', str2));

// 4.) Log an expression that evaluates to true or false using two numbers that are greater or less than eachother
if(1>2) {
    console.log('answer 4 Wrong Answer');
}
else {
    console.log('answer 4 Right Answer!');
}

// 5.) Log an expression that uses modulo, with a result of 4
// your code here
let answer5 = (20%8);
console.log('answer 5');
console.log(answer5);

/**********************/
/* Part 2: Statements */
/**********************/

// 6.) Assign a variable and console log the declaration
var answer6 = 'The answer to 6';
console.log('answer 6');
console.log(answer6);

// 7.) Console log a variable assigned to the sum of two numbers
var answer7 = (3+4);
console.log('answer 7');
console.log(answer7);

// 8.) Uncomment this if else statement and add a logical expression as the condition
if (3<5) {
   console.log('It was!')
} else {
   console.log('It was not..')
}

// 9.) Add parenthesis to the following statement, the result should be 1
let answer = ((3 * 3) + 1 )/ ((8 + 12) / 2);
console.log(answer == 1); // This should log true