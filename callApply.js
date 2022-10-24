/**
 * Here are 3 different types of people. If er want to make people to pay bill we have to implement chargeBill method
 * all over them which is very much repeat of the code. So there is 3 types of solution of this problem. 
 * 1. First solution : bind;
 * 2. Second solution : call
 */
/**
 * this owns the full object inside object.
 */

function billPayment(object, amount) {
    object.salary = object.salary - amount;
}

const normalPerson = {
    firstName: 'Rakib',
    lastName: 'Talukder',
    salary:12000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount,tips,govt) {
        // console.log(this);
        this.salary = this.salary - amount - tips - govt;
        console.log(this.salary);
    }
};

const specialPerson = {
    firstName: 'Sujabat',
    lastName: 'Ali',
    salary: 35000
};

const kakaPerson = {
    firstName: 'Abdul',
    lastName: 'Mannan',
    salary: 20000,
};

// third method : apply

normalPerson.chargeBill.apply(specialPerson, [3000,30,11]);

// second method : call
// apply call method to function that owns by other function

normalPerson.chargeBill.call(specialPerson, 3000,300,30);
normalPerson.chargeBill.call(kakaPerson, 3111,200,11);

// first method : bind
const specialPersonBill = normalPerson.chargeBill.bind(specialPerson);
specialPersonBill(3000);

// billPayment(normalPerson, 3000);
// console.log(normalPerson.salary);

// billPayment(specialPerson, 3000);
// console.log(specialPerson.salary);

// billPayment(kakaPerson, 3000);
// console.log(kakaPerson.salary);

// normalPerson.getFullName();
// normalPerson.chargeBill(1211);

