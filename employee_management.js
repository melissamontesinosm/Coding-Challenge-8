
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
};