const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Please enter two numbers.");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter two numbers.");
    process.exit(1);
}

import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("? add | subtract ", (operator) => {

    operator = operator.toLowerCase();
    
    if (operator === "add") {
        const result = add(num1, num2);
        console.log(` ${num1} + ${num2} = ${result}`);
    } else if (operator === "subtract") {
        const result = subtract(num1, num2);
        console.log(` ${num1} - ${num2} = ${result}`);
    } else {
      console.log("Unknow operator");
    }
    
    rl.close();
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}