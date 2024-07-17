// Activity 1: Arithmetic Operations
 // Task 1: Write a program to add two numbers and log the result to the console.
 let num1 = 5;
 let num2 = 3;
 let sum = num1 + num2;
 console.log("Sum:", sum); // Output: Sum: 8

 // Task 2: Write a program to subtract two numbers and log the result to the console.
 let difference = num1 - num2;
 console.log("Difference:", difference); // Output: Difference: 2

 // Task 3: Write a program to multiply two numbers and log the result to the console.
 let product = num1 * num2;
 console.log("Product:", product); // Output: Product: 15

 // Task 4: Write a program to divide two numbers and log the result to the console.
 let quotient = num1 / num2;
 console.log("Quotient:", quotient); // Output: Quotient: 1.6666666666666667
 
 // Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
 let remainder = num1 % num2;
 console.log("Remainder:", remainder); // Output: Remainder: 2


// Activity 2: Assignment Operators
 // Task 6: Use the += operator to add a number to a variable and log the result to the console.
 let number = 10;
 number += 5;
 console.log("Result after += 5:", number); // Output: Result after += 5: 15

 // Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
 number -= 3;
 console.log("Result after -= 3:", number); // Output: Result after -= 3: 12


// Activity 3: Comparison Operators
 // Task 8: Write a program to compare two numbers using < and > and log the result to the console.
 let a = 8;
 let b = 6;
 
 console.log("Is a less than b?", a < b); // Output: Is a less than b? false
 console.log("Is a greater than b?", a > b); // Output: Is a greater than b? true

 // Task 9: Write a program to compare two numbers using <= and >= and log the result to the console.
 console.log("Is a less than or equal to b?", a <= b); // Output: Is a less than or equal to b? false
 console.log("Is a greater than or equal to b?", a >= b); // Output: Is a greater than or equal

 //Task 10: Write a program to compare two numbers using == and != and log the result to the console.
 console.log("Is a equal to b?", a == b); // Output: Is a equal to b? false
 console.log("Is a not equal to b?", a != b); // Output: Is a not equal to b? true

 
//Activity 4: Logical Operators
let condition1 = (a > b); // true
let condition2 = (b < 10); // true
let condition3 = (a < b); // false

 // Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
 console.log("Are both conditions true?", condition1 && condition2); // Output: Are both conditions true? true

 // Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
 console.log("Is at least one condition true?", condition1 || condition3); // Output: Is at least one condition true? true

 // Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
 console.log("Is condition1 not true?", !condition1); // Output: Is condition1 not true? false


// Activity 5: Ternary Operator
 // Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
 let num = -5;
 let result = (num >= 0) ? "Positive" : "Negative";
 console.log("The number is:", result); // Output: The number is: Negative

// Feature Requests:
 //Arithmetic Operations Script:
 // 1. Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
 let x = 15;
 let y = 4;
 
 console.log(`Addition: ${x} + ${y} = ${x + y}`); // Output: Addition: 15 + 4 = 19
 console.log(`Subtraction: ${x} - ${y} = ${x - y}`); // Output: Subtraction: 15 - 4 = 11
 console.log(`Multiplication: ${x} * ${y} = ${x * y}`); // Output: Multiplication: 15 * 4 = 60
 console.log(`Division: ${x} / ${y} = ${x / y}`); // Output: Division: 15 / 4 = 3.75
 console.log(`Remainder: ${x} % ${y} = ${x % y}`); // Output: Remainder: 15 % 4 = 3

 // 2. Comparison and Logical Operators Script:
 // Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
 let n = 10;
 let m = 7;
 
 console.log(`Is ${m} < ${n}? ${m < n}`); // Output: Is 7 < 10? true
 console.log(`Is ${m} > ${n}? ${m > n}`); // Output: Is 7 > 10? false
 console.log(`Is ${m} <= ${n}? ${m <= n}`); // Output: Is 7 <= 10? true
 console.log(`Is ${m} >= ${n}? ${m >= n}`); // Output: Is 7 >= 10? false
 console.log(`Is ${m} == ${n}? ${m == n}`); // Output: Is 7 == 10? false
 console.log(`Is ${m} != ${n}? ${m != n}`); // Output: Is 7 != 10? true

 let cond1 = (m < n);
 let cond2 = (n > 5);

 console.log(`Are both conditions true? ${cond1 && cond2}`); // Output: Are both conditions true? true
 console.log(`Is at least one condition true? ${cond1 || cond2}`); // Output: Is at least one condition true? true
 console.log(`Is condition1 not true? ${!cond1}`); // Output: Is condition1 not true? false
 

 // 3. Ternary Operator Script:
 // Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
 // let number = 10;
 // let result = (number >= 0) ? "Positive" : "Negative";
 // console.log(`The number ${number} is ${result}.`); // Output: The number 10 is Positive.