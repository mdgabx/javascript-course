const poll = new Map();
const voters = new Set();

const addOption = (option) => {
  if(!option) {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`
}

const vote = (option, voterId) => {

  let message = "";

  if (poll.has(option)) {
    const optionVoters = poll.get(option);
    if (optionVoters.has(voterId)) {
      message = `Voter ${voterId} has already voted for "${option}".`;
    } else {
      optionVoters.add(voterId);
      message = `Voter ${voterId} voted for "${option}".`
    }
  } else {
    message = `Option "${option}" does not exist.`
  }

  return message;
}

const displayResults = () => {
  let displayString = "";

  poll.forEach((val, key) => displayString += `${key}: ${val.size} votes\n`);
  return `Poll Results:\n${displayString.trimEnd()}`;
}

addOption("Turkey");
addOption("Morocco");
addOption("Spain");
vote("Morocco", "voter1");
vote("Turkey", "voter2")
vote("Turkey", "voter3")

console.log(displayResults())