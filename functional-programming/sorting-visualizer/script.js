let currentArray = []

function generateElement() {
  return Math.floor(Math.random() * 100) + 1
}

function generateArray() {
  const arr = []

  for (let i = 0; i < 5; i++) {
    arr.push(generateElement())
  }

  return arr
}

function generateContainer() {
  return document.createElement("div")
}

function fillArrContainer(container, arr) {
  container.innerHTML = ""

  arr.forEach((num) => {
    const span = document.createElement("span")
    span.textContent = num
    container.appendChild(span)
  })
}

function isOrdered(a, b) {
  return a <= b
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index]
    arr[index] = arr[index + 1]
    arr[index + 1] = temp
  }
}

function highlightCurrentEls(container, index) {
  const children = container.children

  if (children[index]) {
    children[index].style.border = "2px dashed red"
  }

  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red"
  }
}

document.getElementById("generate-btn").addEventListener("click", () => {
  const arrayContainer = document.getElementById("array-container")
  const startingArray = document.getElementById("starting-array")

  currentArray = generateArray()

  // Remove all sorting steps except the starting array
  arrayContainer.innerHTML = ""

  // Fill the existing starting array
  fillArrContainer(startingArray, currentArray)

  // Put starting array back into the container
  arrayContainer.appendChild(startingArray)
})

document.getElementById("sort-btn").addEventListener("click", () => {
  if (currentArray.length === 0) return

  const arrayContainer = document.getElementById("array-container")
  const startingArray = document.getElementById("starting-array")

  // Remove previous sorting steps, but keep starting-array
  arrayContainer.innerHTML = ""

  const arr = currentArray.slice()

  // The existing starting-array IS the first sorting step.
  fillArrContainer(startingArray, arr)
  highlightCurrentEls(startingArray, 0)
  arrayContainer.appendChild(startingArray)

  let swapped = true

  while (swapped) {
    swapped = false

    // IMPORTANT:
    // Do NOT use "- pass" here.
    // Bubble Sort must compare all adjacent pairs on every pass.
    for (let i = 0; i < arr.length - 1; i++) {

      // The first comparison is represented by #starting-array.
      if (!(i === 0 && arrayContainer.children.length === 1)) {
        const stepContainer = generateContainer()

        // Save the array BEFORE the comparison/swap.
        fillArrContainer(stepContainer, arr)

        // Highlight the pair being compared.
        highlightCurrentEls(stepContainer, i)

        arrayContainer.appendChild(stepContainer)
      }

      // Compare and then swap.
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i)
        swapped = true
      }
    }
  }

  // Add the final sorted array.
  const finalContainer = generateContainer()
  fillArrContainer(finalContainer, arr)
  arrayContainer.appendChild(finalContainer)
})