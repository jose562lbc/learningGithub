/* INSTRUCTIONS --> 
Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number. For numbers divisible by 5 (and not 3), print "Buzz" instead of the number.

Once those are working, modify the program to show numbers divisible by 5 and 3 to show "FireBuzz"
<-- END */


// PART 1: "Fizz" and "Buzz"
var variable = 1;
for (variable = 1; variable <= 99; variable = variable + 1)
if (variable % 3 == 0 && variable % 5 !== 0) {
  console.log ("Fizz");
} else if (variable % 5 == 0 && variable % 3 !== 0) {
  console.log("Buzz");
} else {
  console.log(variable);
}
console.log(variable);

// PART 2: "FizzBuzz"
var variable = 1;
for (variable = 1; variable <= 99; variable = variable + 1)
if (variable % 3 == 0 && variable % 5 == 0) {
  console.log("FizzBuzz");
} else if (variable % 3 == 0 && variable % 5 !== 0) {
  console.log("Fizz");
} else if (variable % 5 == 0 && variable & 3 !== 0) {
  console.log("Buzz");
} else {
  console.log(variable);
}
console.log(variable)