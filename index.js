let firstNumber = Number(prompt("Enter first number: "));

let secondNumber = Number(prompt("Enter second number: "));

let operator = prompt("Choose your operator: + - * /");


const addNum = (num1, num2) => num1 + num2;
const subtractNum = (num1, num2) => num1 - num2;
const multiplyNum = (num1, num2) => num1 * num2;
const divideNum = (num1, num2) => num1 / num2;

if (operator == "+") {
    alert(`The sum of ${firstNumber} and ${secondNumber} is equal to ${addNum(firstNumber, secondNumber)}.`);
} else if (operator == "-") {
    alert(`The difference of ${firstNumber} and ${secondNumber} is equal to ${subtractNum(firstNumber, secondNumber)}.`);
} else if (operator == "*") {
    alert(`The product of ${firstNumber} and ${secondNumber} is equal to ${multiplyNum(firstNumber, secondNumber)}.`);
} else if (operator == "/") {
    alert(`The quotient of ${firstNumber} and ${secondNumber} is equal to ${divideNum(firstNumber, secondNumber)}.`);
} else {
    alert("Wrong input, please refresh the page and try again.");
}

