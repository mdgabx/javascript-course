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




