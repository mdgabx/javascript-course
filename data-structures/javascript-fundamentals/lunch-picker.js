/* 
Build a Lunch Picker Program

In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should create a lunches variable and assign it an empty array that will be used to store lunch items.

    You should create a function addLunchToEnd that takes an array as the first argument and a string as the second argument. The function should:
        Add the string to the end of the array.
        Log the string [Lunch Item] added to the end of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
        Return the updated array.

    You should create a function addLunchToStart that takes an array as the first argument and a string as the second argument. The function should:
        Add the string to the start of the array.
        Log the string [Lunch Item] added to the start of the lunch menu. to the console, where [Lunch Item] is the string passed to the function.
        Return the updated array.

    You should create a function removeLastLunch that takes an array as its argument. The function should:
        Remove the last element from the array.
        If the removal is successful, log the string [Lunch Item] removed from the end of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
        If the array is empty, log the string "No lunches to remove." to the console.
        Return the updated array.

    You should create a function removeFirstLunch that takes an array as its argument. The function should:
        Remove the first element from the array.
        If the removal is successful, log the string [Lunch Item] removed from the start of the lunch menu. to the console, where [Lunch Item] is the element removed from the array.
        If the array is empty, log the string "No lunches to remove." to the console.
        Return the updated array.

    You should create a function getRandomLunch that takes an array as its argument. The function should:
        Select a random element from the array.
        If successful, log the string Randomly selected lunch: [Lunch Item] to the console, where [Lunch Item] is a random element in the array.
        If the array is empty, log the string "No lunches available." to the console.

    You should create a function showLunchMenu that takes an array as its argument and:
        If there are elements in the array, logs the string Menu items: [Lunch Item], [Lunch Item]... to the console, where each [Lunch item] is one of the elements in the array, in order.
        If the array is empty, logs the string "The menu is empty." to the console.

*/

const lunches = [];

function addLunchToEnd(lunches, lunch) {
  console.log(lunch + " added to the end of the lunch menu.");
  lunches.push(lunch);
  return lunches;
}


function addLunchToStart(lunches, lunch) {
  console.log(lunch + " added to the start of the lunch menu.");
  lunches.unshift(lunch);
  return lunches;
}

function removeLastLunch(lunches) {

  if (lunches.length !== 0) {
    const removeLunch = lunches.pop();
    console.log(`${removeLunch} removed from the end of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  }
}

function removeFirstLunch(lunches) {

  if (lunches.length !== 0) {
    const removeLunch = lunches.shift();
    console.log(`${removeLunch} removed from the start of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  }

}

function getRandomLunch(lunches) {
  const randomIndex = Math.floor(Math.random() * lunches.length);

  if (lunches.length !== 0) {
    console.log(`Randomly selected lunch: ${lunches[randomIndex]}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu (lunches) {

  if(lunches.length !== 0) {
    console.log("Menu items: " + lunches.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));