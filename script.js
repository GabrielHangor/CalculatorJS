const resultsDisplay = document.querySelector(".result");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");

let firstNumber = 0;
let operatorValue = "";
let awaitingNextValue = false;

const calculate = {
  "+": (firstNumber, secondNumber) => add(firstNumber, secondNumber),
  "-": (firstNumber, secondNumber) => subtract(firstNumber, secondNumber),
  "*": (firstNumber, secondNumber) => multiply(firstNumber, secondNumber),
  "/": (firstNumber, secondNumber) => divide(firstNumber, secondNumber),
  "=": (firstNumber, secondNumber) => secondNumber,
};

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator) {
  const secondNumber = Number(resultsDisplay.textContent);

  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }

  if (!firstNumber) {
    firstNumber = secondNumber;
  } else {
    const result = calculate[operatorValue](firstNumber, secondNumber);
    resultsDisplay.textContent = result;
    firstNumber = result;
  }

  awaitingNextValue = true;
  operatorValue = operator;
}

function inputNumberValue(value) {
  if (awaitingNextValue) {
    resultsDisplay.textContent = value;
    awaitingNextValue = false;
  } else {
    resultsDisplay.textContent =
      resultsDisplay.textContent === "0"
        ? value
        : resultsDisplay.textContent + value;
  }
}

function inputDecimal() {
  if (!resultsDisplay.textContent.includes(".") && !awaitingNextValue) {
    resultsDisplay.textContent = `${resultsDisplay.textContent}.`;
  }
}

// Add event listeners on each button separately based on condition
inputBtns.forEach((button) => {
  if (button.classList.length === 0) {
    button.addEventListener("click", () => inputNumberValue(button.value));
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => operate(button.value));
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", inputDecimal);
  }
});
