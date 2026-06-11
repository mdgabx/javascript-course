/* 
In this lab, you'll practice using functions by building a random password generator.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should create a function called generatePassword that takes a parameter, indicating the length of generated password. You can name the parameter whatever you like.
    Your function should return a string which represents a randomly generated password. You should use the following string and different Math methods to help you return a new string with random characters in it: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().
    You should define a variable called password and assign it the result of calling the generatePassword function with a numeric argument that represents the desired password length.
    You should have a console.log that logs a single string made by concatenating the message Generated password: and the password variable separated by a space.


*/

function generatePassword(passwordLength) {
  const stringList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";

  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * stringList.length) ;
    password += stringList[randomIndex];
  } 
  
  return password;
}

const password = generatePassword(8);
console.log(`Generated password: ${password}`);