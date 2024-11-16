// an array of operators

const operators = ["+", "-", "*", "/"];

// Functions for each operator

//Multiply
function multiplyNum(x, y) {
  return x * y;
}

//Divide
function divideNum(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
}

//Addition
function addNum(x, y) {
  return x + y;
}

//Subtraction
function subtractNum(x, y) {
  return x - y;
}

// Array: Change this to an Object -  https://www.w3schools.com/jsref/jsref_map_new.asp I reseached learn this from w3s
const operations = new Map([
  ["*", multiplyNum],
  ["/", divideNum],
  ["+", addNum],
  ["-", subtractNum],
]);

// Process.argv 
function calculate() {
  const args = process.argv.slice(2);
  console.log("Arguments:", args); // Debug - Investigate "/" which bash is taking like DIR and showing the Git folder

  if (args.length !== 3) {
    console.log("We need 3 inputs: num operator num");
    return;
  }
  const [arg1, operator, arg2] = args;
  const x = parseFloat(arg1);
  const y = parseFloat(arg2);

  // Check if numbers are entered
  if (isNaN(x) || isNaN(y)) {
    console.log("not a valid number, Please input valid numbers");
    return;
  }
  // Error handling approach first
  if (!operators.includes(operator)) {
    console.log("Invalid Operator, must be one of: *, /, +, -");
    return;
  }
  try {
    const calculate = operations.get(operator);
    const result = calculate(x, y);
    console.log(`Result: ${x} ${operator} ${y} = ${result}`);
  } catch (error) {
    console.log(error.message);
  }
}

calculate();
