# cpnt262-calculator

# Rufaro Mucheri

This is a simple command-line calculator built in JavaScript. It performs basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator accepts two numbers and an operator as inputs from the command line, processes the calculation, and returns the result.

## Features

- Supports the following operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
- Validates the inputs and handles division by zero gracefully.

## How to Run the Calculator

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
2. Open a terminal or command prompt.
3. to operate division / you have to use powershell since Bash recognises the / as a way of getting into DIRs
4. Navigate to the directory containing the `calculator.js` file.
5. Run the calculator with the following command:

   ```bash
   node calculator.js <number1> <operator> <number2>
   ```

###

- Challenges faced included trying to get the Division to work in Bash
- Understanding how process.argv works
