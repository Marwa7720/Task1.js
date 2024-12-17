/*task 1 Write a javascript code to display in console the odd numbers from 1 to 9*/

for (let i = 1; i <= 9; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*- Print numbers from **1 to 40**.
- Use an **if condition** to check:
    - If the number is divisible by 3 → print "Fizz".
    - If the number is divisible by 5 → print "Buzz".
    - If the number is divisible by both 3 and 5 → print "FizzBuzz".
    - Otherwise → print the number itself*/

for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
