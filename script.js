const currentInput = document.querySelector(".result");
const inputContainer = document.querySelector(".input-container");

function displayInput(e) {
  if (e.target.value === '.' && currentInput.textContent.includes(".")) {
    currentInput.textContent.replace(',', '');
  } else if (!e.target.className && currentInput.textContent === '0' && e.target.value !== '.') {
    currentInput.textContent = e.target.value;
  } else if (!e.target.className) {
    currentInput.textContent += e.target.value;
  }
}




inputContainer.addEventListener("click", (e) => displayInput(e));
