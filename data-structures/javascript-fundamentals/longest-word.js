/* 
Build a Longest Word Finder App

In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should create a function named findLongestWordLength that takes a string as an argument.
    The function should return the length of the longest word in the string.


*/


function findLongestWordLength(phrase) {
  const wordsArray = phrase.split(" ");
  let longestWord = "";

  for(let i = 0; i < wordsArray.length; i++) {

    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")