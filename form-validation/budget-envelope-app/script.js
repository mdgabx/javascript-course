const budgetForm = document.getElementById('budget-form');
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const category = entryDropdown.value;
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input 
    type="number" 
    min="0" 
    id="${category}-${entryNumber}-amount" placeholder="Amount" 
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateBudget() {
  
}

function getTotalFromInputs(list) {
  let total = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    total += Number(currVal);
  }
  return total;
}

addEntryButton.addEventListener("click", addEntry);