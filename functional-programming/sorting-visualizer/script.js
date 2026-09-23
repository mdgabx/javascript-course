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
  // Clear out all children of array-container except starting-array
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });

  // Generate a new array
  currentArray = generateArray();

  // Create a fresh container for the starting array
  const parentContainer = generateContainer();
  fillArrContainer(parentContainer, currentArray);

  // Reset starting-array to only show the new numbers
  startingArray.innerHTML = "";
  startingArray.appendChild(parentContainer);
});


const renderStep = (integers) => {
  const stepContainer = generateContainer();
  fillArrContainer(stepContainer, integers);
  arrayContainer.appendChild(stepContainer);
}


sortBtn.addEventListener("click", () => {
  // Remove all children except starting-array
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });

  // Render the starting array as the first step
  renderStep([...currentArray]);

  // Bubble Sort visualization
  for (let i = 0; i < currentArray.length - 1; i++) {
    for (let j = 0; j < currentArray.length - 1 - i; j++) {
      swapElements(currentArray, j);
      renderStep([...currentArray]); // snapshot after each swap
    }
  }

  renderStep([...currentArray]);
});

