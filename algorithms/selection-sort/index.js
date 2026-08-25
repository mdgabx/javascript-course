function selectionSort(array) {
  //getting the minimum value in the array
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
   // console.log("index i: ", i)

    for (let j = i + 1; j < array.length; j++) {
    //  console.log("index j: ", j);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));