const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i"
  }

  if (globalFlag.checked) {
    flags += "g"
  }

  return flags;
}

caseInsensitiveFlag.addEventListener("change", getFlags)

const testRegex = (string, regex) => {
  const flags = getFlags();
  const regexStr = new RegExp(regex, flags);
  const result = string.match(regexStr);

  if (result) {
    stringToTest.innerHTML = string.replace(regexStr, (match) => `<span class="highlight">${match}</span>`);
    testResult.textContent = result.join(", ");
  } else {
     testResult.textContent = "no match";
  }
}

testButton.addEventListener("click", () => {
  testRegex(stringToTest.textContent, regexPattern.value)
})