/* 

Build a Symmetric Difference Function

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:

    Array A: ["diamond", "stick", "apple"]

    Array B: ["stick", "emerald", "bread"]

Result: ["diamond", "apple", "emerald", "bread"]

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    Your function diffArray should return an array.
    Your function should take two arguments, both of which are arrays.
    Your function should make use of the filter method.
    Your function should return the symmetric difference of the two arrays.
    Your function should return an empty array if there is no symmetric difference.

*/

function diffArray (arr1, arr2) {
  const symArr1 = arr1.filter((item) => arr2.indexOf(item) === -1)
  const symArr2 = arr2.filter((item) => arr1.indexOf(item) === -1)

  return symArr1.concat(symArr2);
}

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

diffArray(["pen", "book"], ["book", "pencil", "notebook"])