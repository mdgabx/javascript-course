const permuteString = (word, prefix = "", result = []) => {
  if (word.length === 0) {
    if (!result.includes(prefix)) {
      result.push(prefix);
    }

    return result;
  }

  for (let i = 0; i < word.length; i++) {
    // console.log("0 i: ", word.slice(0, i))
    // console.log("remain: ", word.slice(i + 1))
    const remainingChars = word.slice(0, i) + word.slice(i + 1);
    permuteString(remainingChars, prefix + word[i], result)
  }

  return result;
}

permuteString("cat");