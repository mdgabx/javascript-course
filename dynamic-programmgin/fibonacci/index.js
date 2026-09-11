

function fibonacci(n) {
  const sequence = [0, 1];

  for(let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  // console.log(sequence[i])
  return sequence[n];
}

fibonacci(0)