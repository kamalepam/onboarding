
const employee = [
    { name: 'Thomas Edwin', empid: 'E111', salary: 10000 },
    { name: 'Gregory Mathew', empid: 'E555', salary: 12000 },
    { name: 'Thomas Edison', empid: 'E444', salary: 8000 },
    { name: 'Gregory Edwin', empid: 'E222', salary: 6000 },
    { name: 'Isac Newton', empid: 'E666', salary: 20000 },
    { name: 'Thomas Gibson', empid: 'E333', salary: 4000 }
];
//1. Write arrow function to return all the Objects which contain name as "Edwin"
const filterByName = (arr, searchName) =>
arr.filter(employee => employee.name.includes(searchName));
// usage:
const result = filterByName(employee, 'Edwin');
console.log(result);

//2. Write arrow function to return all the employee ids and sum of total salaries.
const calculateTotalSalaries = (employees) => {
    return employees.reduce((result, employee) => {
        result.ids.push(employee.empid);
        result.totalSalary += employee.salary;
        return result;
    }, { ids: [], totalSalary: 0 });
};
// usage:
const { ids, totalSalary } = calculateTotalSalaries(employee);

console.log('Employee IDs:', ids);
console.log('Total Salary:', totalSalary);


//3.implement add, subtract, multiply, divide and other calculation methods in "calculator" class 
//and use them in a different class "interest calculator" 
//calculate total amount to be paid after calculating the interest based on the number of months.
//if number of months is less than 12, calculate simple interest at 6% 
//and if number of months greater than 12 then calculate compound interest at 5.5%

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

class InterestCalculator {
  static calculateSimpleInterest(principal, rate, time) {
    return Calculator.multiply(
      Calculator.multiply(principal, rate / 100), // Rate should be in percentage
      time
    );
  }

  static calculateCompoundInterest(principal, rate, time) {
    return Calculator.subtract(
      Calculator.multiply(principal, Math.pow(1 + rate / 100, time)),
      principal
    );
  }

  static calculateTotalAmount(principal, time) {
    if (time < 12) {
      const simpleInterest = InterestCalculator.calculateSimpleInterest(
        principal,
        6,
        time
      );
      return Calculator.add(principal, simpleInterest);
    } else {
      const compoundInterest = InterestCalculator.calculateCompoundInterest(
        principal,
        5.5,
        time
      );
      return Calculator.add(principal, compoundInterest);
    }
  }
}

// usage::
const principalAmount = 1000;
const numberOfMonths = 6;

const totalAmount = InterestCalculator.calculateTotalAmount(
  principalAmount,
  numberOfMonths
);

console.log(`Total amount to be paid after ${numberOfMonths} months: $${totalAmount}`);


