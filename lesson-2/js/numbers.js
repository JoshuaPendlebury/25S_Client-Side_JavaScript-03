/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let myFloat = 2.1625;
let myInt = 3;
let myDouble = 5.9999999999999999999999999;

// Note - there are also different number systems: binary, octal, and hexadecimal
let myBinary = 0o0101010001;
let myHex = 0x54AFD3;

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let step2A = 5 * 2;
console.log(step2A)

// Try declaring and initializing a couple of variables as numbers
let num1 = 90;
let num2 = 30;
let step2B = num1 + num2 * num1;

/* OR… num1 * num2 / 8 + 2 - 0.5; */
console.log(num1 * num2 / 8 + 2 - 0.5);
/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
console.log(num1 + num2 * 5 - 25);
/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */
console.log((num1 + num2) * 5 - 25);
/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
let step3 = 5;
console.log(`Step 3 = ${step3}`);
step3 ++;
console.log(`Step 3 incremented = ${step3}`);

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
let step4 = 5;
console.log(`step4 = ${step4}`);
step4 += 6;
console.log(`+= ${step4}`);
step4 -= 3;
console.log(`-= ${step4}`);
step4 /= 2;
console.log(`/= ${step4}`);
step4 *= 3;
console.log(`*= ${step4}`);

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
let step5A = 5;
let step5B = "5";
let step5C = step5A == step5B;
let step5D = step5A === step5B;
console.log(`step5A == step5B = ${step5C}`)
console.log(`step5A === step5B = ${step5D}`)