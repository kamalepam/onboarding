//1. Fibonacci sequence. using memoization technique
function memoizeFibonacci(element, memo = {}) {
  if (element < 3) return 1;
  if (element in memo) return memo[element];

  memo[element] = memoizeFibonacci(element - 1, memo) + memoizeFibonacci(element - 2, memo);

  return memo[element];
}
// usage:
let a = 15;
for(let i =1; i<=a; i++){
console.log('Memoize febonaci', memoizeFibonacci(i));
}


//2. Write function to read, Write and append data to a text file using fs library and use methods readfile, write file and append methods.
const fs = require('fs'); 

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
// usage:
readFile('sample.txt');

function writeFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, data);
    console.log('File written successfully.');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}
// usage:
writeFile('sample.txt', 'This is a new content.');

function appendFile(filePath, data) {
  try {
    fs.appendFileSync(filePath, data);
    console.log('Data appended successfully.');
  } catch (error) {
    console.error('Error appending data:', error);
  }
}

// usage:
appendFile('sample.txt', '\nThis is appended text.');



