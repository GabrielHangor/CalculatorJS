const currentInput = document.querySelector(".result");
const inputContainer = document.querySelector(".input-container");
const equalSign = document.querySelector('#equal-sign');

let firstValue = 0;
let secondValue = 0;
let operator;
let awaitNextValue = false;

const calculate = {
  "/": (firstValue, secondValue) => firstValue / secondValue,
  "*": (firstValue, secondValue) => firstValue * secondValue,
  "+": (firstValue, secondValue) => firstValue + secondValue,
  "-": (firstValue, secondValue) => firstValue - secondValue,
}


function operate () {
  secondValue = Number(currentInput.textContent);
  currentInput.textContent = calculate[operator](firstValue, secondValue);
  firstValue = Number(currentInput.textContent)
  secondValue = 0;
  operator = '';
}

function storeValues (e) {
  if (e.target.classList.contains('operator') && !operator) {
    operator = e.target.value;
    firstValue = Number(currentInput.textContent);
    currentInput.textContent = '';
  } else if (e.target.classList.contains('operator') && operator) {
    secondValue = Number(currentInput.textContent);
    currentInput.textContent = calculate[operator](firstValue, secondValue);
    firstValue = Number(currentInput.textContent)
    secondValue = 0;  

  }

  console.log(firstValue, secondValue, operator);
}



function displayInput(e) {
  if (!e.target.className && e.target.value === '.' && currentInput.textContent.includes(".")) {
    currentInput.textContent.replace(',', '');
  } else if (!e.target.className && currentInput.textContent === '0' && e.target.value !== '.') {
    currentInput.textContent = e.target.value; 
  } else if (!e.target.className) {
    currentInput.textContent += e.target.value;
  }
}

inputContainer.addEventListener("click", (e) => displayInput(e));
inputContainer.addEventListener('click', (e) => storeValues(e));
equalSign.addEventListener('click', operate);
