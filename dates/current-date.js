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
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

 return `Formatted Date (Month Day, Year): ${months[month]} ${day}, ${year}` 
}

console.log(currentDateFormat)
console.log(formatDateMMDDYYYY(currentDate))
console.log(formatDateLong(currentDate))