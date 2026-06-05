let email = "freecodecamp@example.com";
function maskEmail(email) {
    // get the index where @ is found;
    const usernameIndex = email.indexOf("@");

    // slice the email to two parts username and domain
    const domain = email.slice(
            usernameIndex,
            email.length 
            );
    
    const username = email.slice(0, usernameIndex);

    /* getting the first letter and last letter of the email username */
    const firstLetterOfUsername = username.slice(0, 1);
    const lastLetterOfUsername = username.slice(-1);

    const countOfLetters = username.length - 2;


    return firstLetterOfUsername + "*".repeat(countOfLetters) + lastLetterOfUsername + domain;
}

console.log(maskEmail(email))
