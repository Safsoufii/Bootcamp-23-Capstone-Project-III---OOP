const employees = []; // Initialise an empty array to store employee instances

class Employee { 
  constructor(name, employeeType) { // constructor for the base class Employee which takes in name and employeeType and assigns them to properties of the same name
    this.name = name;
    this.employeeType = employeeType;
  }
}

class SalariedEmployee extends Employee { // class for Salaried Employees which inherit from Employee
  constructor(name, salary, target) { 
    super(name, 'Salaried');  // call the constructor of the base class Employee
    this.salary = salary; // assign the salary to the property of the same name
    this.target = target; // assign the target sales to the property of the same name
  }

  calculatePayout(sales) { 
  let bonus = 0; // initialise bonus to 0
  let targetMet = false; // initialise targetMet to false
  if (sales > this.target) { // check if the sales is greater than the target
    bonus = this.salary * 0.1; // calculate the bonus as 10% of salary
    targetMet = true; // set targetMet to true
  }
  const payout = this.salary + bonus; // calculate the payout as salary + bonus
  console.log(`Payout for ${this.name} (Salaried): salary = ${this.salary}, bonus = ${bonus}, payout = ${payout} ${targetMet ? '(sales target met)' : '(sales target not met)'}`);
  return payout; // return the payout
}
}

class HourlyEmployee extends Employee { // class for Hourly Employees which inherit from Employee
  constructor(name, hourlyRate, hoursWorked, target) {
    super(name, 'Hourly');  // call the constructor of the base class Employee
    this.hourlyRate = hourlyRate; // assign the hourly rate to the property of the same name
    this.hoursWorked = hoursWorked; // assign the hours worked to the property of the same name
    this.target = target; // assign the target sales to the property of the same name
  }

  calculatePayout(sales) { 
  let bonus = 0; // initialise bonus to 0
  let targetMet = false; // initialise targetMet to false
  if (sales > this.target) { // check if the sales is greater than the target
    bonus = this.hourlyRate * 0.5 * this.hoursWorked; // calculate the bonus as half of the hourly rate times the hours worked
    targetMet = true; // set targetMet to true
  }
  const payout = this.hourlyRate * this.hoursWorked + bonus; // calculate the payout as hourly rate times hours worked plus bonus
  console.log(`Payout for ${this.name} (Hourly): hourly rate = ${this.hourlyRate}, hours worked = ${this.hoursWorked}, bonus = ${bonus}, payout = ${payout} ${targetMet ? '(sales target met)' : '(sales target not met)'}`);
  return payout; // return the payout
}
}

class HybridEmployee extends Employee { // class for Hybrid Employees which inherit from Employee
  constructor(name, salary, hourlyRate, hoursWorked, target) {
    super(name, 'Hybrid');
    this.salary = salary;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
    this.target = target;
  }

  calculatePayout(sales) {
    let bonus = 0; // Initialise bonus variable to 0
    let targetMet = false; // Initialise targetMet variable to false
    if (sales > this.target) {  // Check if sales is greater than the target
      bonus = this.salary * 0.1; // Calculate bonus as 10% of salary
      this.hourlyRate *= 1.2; // Increase hourly rate by 20%
      targetMet = true; // Set targetMet to true
    }
    const hourlyPay = this.hourlyRate * this.hoursWorked; // Calculate hourly pay
    const payout = this.salary + hourlyPay + bonus; // Calculate payout as salary + hourly pay + bonus
    console.log(`Payout for ${this.name} (Hybrid): salary = ${this.salary}, hourly rate = ${this.hourlyRate}, hours worked = ${this.hoursWorked}, bonus = ${bonus}, payout = ${payout} ${targetMet ? '(sales target met)' : '(sales target not met)'}`);
    return payout; // Return the calculated payout
  }
  
}

const sally = new SalariedEmployee('Sally', 1000, 10);
const john = new SalariedEmployee('John', 2000, 20);

const jane = new HourlyEmployee('Jane', 8, 160, 15);
const tom = new HourlyEmployee('Tom', 25, 7, 25);

const bob = new HybridEmployee('Bob', 1000, 7, 160, 15);
const alice = new HybridEmployee('Alice', 500, 7, 200, 25);

employees.push(sally, john, jane, tom, bob, alice);

employees.forEach(employee => {
  // Generate a random number between 0 and 99
  const sales = Math.floor(Math.random() * 100);
  // Call the calculatePayout method on the current employee, passing in the sales value
  const payout = employee.calculatePayout(sales);
  // Log the employee's name, employee type, sales and payout to the console
  console.log(`
  Employee Name: ${employee.name}
  Employee Type: ${employee.employeeType}
  Sales: ${sales}
  Payout: £${payout}
  `);
});


