class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
};

// previous method when new keyword was not available

function Person2(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const normalPerson = new Person('rakib', 'talukder', 60000);
const specialPerson = new Person('sujabat', 'ali', 30000);
const kakaPerson = new Person2('abdul', 'mannan', 20000);


console.log(normalPerson);
console.log(specialPerson);
console.log(kakaPerson);