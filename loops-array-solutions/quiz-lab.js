// ✅ Questions array with at least 5 objects
const questions = [
  {
    category: "JavaScript Basics",
    question: "Which keyword is used to declare a constant variable?",
    choices: ["var", "let", "const"],
    answer: "const"
  },
  {
    category: "CSS",
    question: "Which property is used to set the background color?",
    choices: ["color", "background-color", "font-color"],
    answer: "background-color"
  },
  {
    category: "HTML",
    question: "Which tag is used to display an image?",
    choices: ["<img>", "<image>", "<picture>"],
    answer: "<img>"
  },
  {
    category: "Databases",
    question: "Which SQL command is used to remove a record?",
    choices: ["DELETE", "REMOVE", "DROP"],
    answer: "DELETE"
  },
  {
    category: "Programming Concepts",
    question: "What does JSON stand for?",
    choices: ["JavaScript Object Notation", "Java Source Open Network", "JavaScript Online Node"],
    answer: "JavaScript Object Notation"
  }
];

// ✅ Function to get a random question
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// ✅ Function to get a random computer choice
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// ✅ Function to check results
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// --- Example run ---
const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer chose:", computerChoice);

console.log(getResults(randomQuestion, computerChoice));
