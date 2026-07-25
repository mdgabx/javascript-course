const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (num) => {
  let binary = "";
  let n = num;

  if (n === 0) return "0000";

  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }

  // Ensure the string is always 4 characters long
  return binary.padStart(4, "0");
};

const checkUserInput = () => {
  const value = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(value) || value < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  // Display the result
  result.textContent = decimalToBinary(value);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
