const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const dateFormatted = `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
  return dateFormatted;
}

function formatDateLong (date) {
  
}

console.log(currentDateFormat)
console.log(formatDateMMDDYYYY(currentDate))
console.log(formatDateLong(currentDate))