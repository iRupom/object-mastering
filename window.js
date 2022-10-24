let nam = 'rupom';

function add(num1, num2) {
    result = num1 + num2; // ixplicit global reference
    // window.result = num1 + num2 it is also explicit global reference variable
    console.log(result);

    function doubleIt(num) {
        return num * 2;
    }

    var total = doubleIt(result);

    return total;
}

console.log(result); // it will cause an error. because js compiler doesn't compile function until it is called.

let sum = add(1, 2);
console.log(nam);

console.log(result);
