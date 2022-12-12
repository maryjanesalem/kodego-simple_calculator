let firstNumber = Number(prompt("Enter first number: "));

let secondNumber = Number(prompt("Enter second number: "));

const addNum = (num1, num2) => num1 + num2;
const subtractNum = (num1, num2) => num1 - num2;
const multiplyNum = (num1, num2) => num1 * num2;
const divideNum = (num1, num2) => num1 / num2;


alert(`The sum of ${firstNumber} and ${secondNumber} is equal to ${addNum(firstNumber, secondNumber)}.
The difference of ${firstNumber} and ${secondNumber} is equal to ${subtractNum(firstNumber, secondNumber)}.
The product of ${firstNumber} and ${secondNumber} is equal to ${multiplyNum(firstNumber, secondNumber)}.
The quotient of ${firstNumber} and ${secondNumber} is equal to ${divideNum(firstNumber, secondNumber)}.
`);