// Simple Calculator App using Node.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question(
            "Enter operation (add, subtract, multiply, divide): ",
            (operation) => {
                const result = calculate(
                    operation,
                    parseFloat(num1),
                    parseFloat(num2)
                );
                console.log(`Result: ${result}`);
                rl.close();
            }
        );
    });
});
