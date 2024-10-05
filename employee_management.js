
// Task 1: Create an Employee Class

class Employee { 
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

//Example Data
const marshall = new Employee("Marshall", 90000, "Accountant", "Finance");
const barney = new Employee("Barney", 95000, "Designer", "Marketing");
const robin = new Employee("Robin", 80250, "Trader", "Finance");
const lily = new Employee("Lily", 77750, "Secretary", "Finance");
