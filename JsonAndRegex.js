
//1. read multiple usernames and passwords from json File

//Json file code
{
"testData": [
{
"username": "user1",
"password": "pwd1"
},
{
"username": "user2",
"password": "pwd2"
}
],
"envURL": "www.google.com"
}

//Solution-

const fs = require('fs'); 

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Access the testData array
    const testData = jsonData.testData;

    // Loop through the user data and print usernames and passwords
    testData.forEach((user, index) => {
      console.log(`User ${index + 1}:`);
      console.log(`Username: ${user.username}`);
      console.log(`Password: ${user.password}`);
      console.log('---');
    });

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});

//2. Write a function to validate whether given string is a valid email id or not.
//Rules for valid email can be referrd at; https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-

//Solution1- 
function isValidEmail(email) {
// Regular expression pattern for basic email validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailPattern.test(email);
}

// Example:
const email = 'user@example.com';
if (isValidEmail(email)) {
console.log(`${email} is a valid email address.`);
} else {
console.log(`${email} is not a valid email address.`);
}

//Solution2-

//Another approach to validate email addresses is to use a popular email validation library like validator.js. Here's how we can do it:
//First, you need to install the validator library using npm or yarn (npm install validator):

const validator = require('validator');

function isValidEmailUsingValidator(email) {
return validator.isEmail(email);
}

// Example usage:
const email = 'user@example.com';
if (isValidEmailUsingValidator(email)) {
console.log(`${email} is a valid email address.`);
} else {
console.log(`${email} is not a valid email address.`);
}

