//1. Write function to remove elements which are formed by same characters.
function removeDuplicatesBySameCharacters(arr) {
  const seen = new Set();
  const result = [];

  for (const str of arr) {
    const sortedStr = str.split('').sort().join('');
    // Check if the sorted string has been seen before
    if (!seen.has(sortedStr)) {
      seen.add(sortedStr);
      result.push(str);
    }
  }
  return result;
}

// usage:
const inputArray = ["1357", "7531", "2480", "0428", "1234", "2345", "3456"];
const outputArray = removeDuplicatesBySameCharacters(inputArray);
console.log(outputArray);


//2. Write function implementation to read data from files using promises.
//Resolve promise if reading data from file is successful and reject if it's a failure
//Handle failures using catch and finally of promises

const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(filePath, 'utf8')
      .then(data => {
        resolve(data); 
      })
      .catch(error => {
        reject(error); 
      });
  });
}

//usage:
const filePath = 'Test.txt';

readFileAsync(filePath)
  .then(data => {
    console.log('File content:', data);
  })
  .catch(error => {
    console.error('Error reading file:', error);
  })
  .finally(() => {
    console.log('File reading operation completed.'); 
  });

