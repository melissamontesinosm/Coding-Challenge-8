
// Task 1: Create an Employee Class

class Employee { // Defining Employee class
    constructor(name, salary, position, department) { // Implemented parameters
         this.name = name; // Denoting current instances 
         this.salary = salary;
         this.position = position;
         this.department = department;   
     };

     getDetails() { // Defining a method inside a class to print employee's details
        console.log(`Employee: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`);
     }
};


// Task 2: Create a Department Class

class Department { // Defining Department Class
    constructor(name) { 
        this.name = name;
        this.employees = [];
    };

    addEmployee(employee) { // Defining a method to add an employee object to an array
        this.employees.push(employee); // Adds a new employee
    };

    getDepartmentSalary() { // Defining a method to add the total salary of all employees
        return this.employees.reduce((total, employee) => total + employee.salary, 0); // Return result
    };

// Task 4: Handle Bonuses for Managers    
    calculateTotalSalaryWithBonus() { 
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus; // Add salary and bonus for Managers
            } else {
                return total + employee.salary; // Just add salary for regular employees
            }
        }, 0); // Initial total is 0
    }
};    

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee { // Defining Manage class that inherits traits from employee class
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    };

    getDetails() { // Defining a method that includes bonus
        console.log(`Employee: ${this.name}, Position: ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`);
    };
};

// Task 5: Create and Manage Departments and Employees

// Create Departments
const finance = new Department ("Finance");
const marketing = new Department ("Marketing");
const legal = new Department ("Legal")

// Create Employees
const marshall = new Manager ("Marshall", 90000, "Lawyer", "Legal", 1200);
const lily = new Employee ("Lily", 75000, "Designer", "Marketing");
const barney = new Manager ("Barney", 125000, "Analyst", "Finance", 30000);
const robin = new Employee ("Robin", 88000, "Reporter", "Marketing");

// Add employees to departments
finance.addEmployee(barney);
legal.addEmployee(marshall);
marketing.addEmployee(robin);
marketing.addEmployee(lily);

// Calculate total salary for each department
console.log(`Total Salary for the Finance Department: $${finance.getDepartmentSalary()}`);
console.log(`Total Salary including bonuses for Finance: $${finance.calculateTotalSalaryWithBonus()}`);
console.log(`Total Salary for the Marketing Department: $${marketing.getDepartmentSalary()}`);
console.log(`Total Salary inclusing bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
console.log(`Total Salary for the Legal Department: $${legal.getDepartmentSalary()}`);
console.log(`Total Salary including bonuses for Legal: $${legal.calculateTotalSalaryWithBonus()}`);
