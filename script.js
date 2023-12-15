let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  displayValue = '';
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(op) {
  if (displayValue !== '') {
    if (operator !== '') {
      calculate();
    }
    firstNumber = displayValue;
    operator = op;
    displayValue = '';
    updateDisplay();
  }
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function toggleNegate() {
  if (displayValue !== '') {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
  }
}

function calculateFactorial() {
  if (displayValue === '') {
    return;
  }

  const number = parseFloat(displayValue);

  if (Number.isInteger(number) && number >= 0) {
    displayValue = factorial(number).toString();
    updateDisplay();
  } else {
    displayValue = 'Error';
    updateDisplay();
  }
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && displayValue !== '') {
    secondNumber = displayValue;

    switch (operator) {
      case '+':
        displayValue = add(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '-':
        displayValue = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '*':
        displayValue = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '/':
        if (secondNumber !== '0') {
          displayValue = divide(parseFloat(firstNumber), parseFloat(secondNumber));
        } else {
          displayValue = 'Error: Division by zero';
        }
        break;
      default:
        break;
    }

    // Round the result to avoid long decimals
    displayValue = Math.round(displayValue * 100) / 100;

    // Reset for the next operation
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
    updateDisplay();
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
