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
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

let currentArray = [];

generateBtn.addEventListener("click", () => {
  const parentContainer =  generateContainer();
  currentArray = generateArray();
 
  fillArrContainer(parentContainer, currentArray)

  startingArray.innerHTML = "";
  startingArray.appendChild(parentContainer);
})

sortBtn.addEventListener("click", () => {
  // arrayContainer = generateContainer();
  console.log(currentArray)
})

