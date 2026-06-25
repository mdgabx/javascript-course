const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const  result = document.getElementById("result");

const getResult = () => {
  const word = textInput.value.toLowerCase();

  if(word === "") {
    alert("Please input a value");
    return;
  }

  const filterWord = word.replace(/[^a-z0-9A-Z]/gi, "");
  const isPalindrome = checkIfPalindrome(filterWord);

  result.textContent = isPalindrome ? 
      `${word} is a palindrome` :
      `${word} is not a palindrome`
}

const checkIfPalindrome = (word) => {
  let reverseWord = "";
  
  for(let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]; 
  }

  return reverseWord === word ? true : false;
}

checkBtn.addEventListener("click", getResult);