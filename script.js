// DOM Elements
const inputBox = document.querySelector(".input-box");
const addButton = document.querySelector(".add-btn");
const calculateButton = document.querySelector(".calculate-btn");
const dropDown = document.getElementById("DropDown");
const resultDiv = document.querySelector(".result");

// Array to store numbers
let numbers = [];

// Add number to the array
addButton.addEventListener("click", () => {
  const inputValue = parseFloat(inputBox.value);

  if (!isNaN(inputValue)) {
    numbers.push(inputValue); // Add number to the array
    console.log("Numbers Array:", numbers); // Debugging
    inputBox.value = ""; // Clear the input box
    resultDiv.textContent = `Added: ${inputValue}`;
  } else {
    resultDiv.textContent = "Please enter a valid number!";
  }
});

// Calculate result based on dropdown selection
calculateButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    resultDiv.textContent = "No numbers to calculate!";
    return;
  }

  const selectedOption = dropDown.value;
  let result;

  if (selectedOption === "sum") {
    result = numbers.reduce((acc, num) => acc + num, 0);
  } else if (selectedOption === "largest") {
    result = Math.max(...numbers);
  } else if (selectedOption === "smallest") {
    result = Math.min(...numbers);
  }

  resultDiv.textContent = `Result: ${result}`;
});
