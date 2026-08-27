function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for(let i = 0; i < array.length - 1; i++) {
    // console.log(array[i])
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i])
    }
  }

  // console.log(left)
  // console.log(right)

  return [...quicksort(left), pivot, ...quicksort(right)];
}

quicksort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])