const resultsDisplay = document.querySelector(".result");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");

let firstValue = 0;
let secondValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function add(firstValue, secondValue) {
  return firstValue + secondValue;
}

function subtract(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
  return firstValue / secondValue;
}

function operate(operator, firstValue, secondValue) {}

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
    button.addEventListener("click", () =>
      operate(button.value, firstValue, secondValue)
    );
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", inputDecimal);
  }
});
