/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(a, operator, b) {
  if (operator === "+") {
    return a + b;
  }
  if (operator === "-") {
    return a - b;
  }
  if (operator === "/") {
    if (b === 0) {
      return "Can't divide by 0!";
    }
    return a / b;
  }
  return a * b;
}

exports.solution = calculator;