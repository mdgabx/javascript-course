const generateElement = () => {
  return Math.floor((Math.random() * 100) + 1);
}

const generateArray = () => {
  const randomArray = [];
  let index = 0;

  while (index < 5) {
    const randomInteger = generateElement();
    randomArray.push(randomInteger)
    index++;
  }

  return randomArray
}

const generateContainer = () => {
  return document.createElement("div")
}

const fillArrContainer = (element, integers) => {
  integers.forEach((integer) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = integer;
    element.appendChild(newSpan);
  });
}

const isOrdered = (a, b) => {
  return a <= b ? true : false;
}

const swapElements = (integers, index) => {
  if (!isOrdered(integers[index], integers[index + 1])) {
    const temp = integers[index];
    integers[index] = integers[index + 1];
    integers[index + 1] = temp;
  }
}


const highlightCurrentEls = (element, index) => {
  const children = element.children;
  const firstEl = children[index];
  const secondEl = children[index + 1];

  firstEl.style.border = "2px dashed red";
  secondEl.style.border = "2px dashed red";
}

const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");

generateBtn.addEventListener("click", () => {
  const parentContainer =  generateContainer();
  const startingNumbers = generateArray();

  console.log(parentContainer, startingNumbers)

  //fill the array under the parent container
  fillArrContainer(parentContainer, startingNumbers)

  startingArray.innerHTML = "";
  startingArray.appendChild(parentContainer);


})