function addTwoNumbers(a, b) {
    try {
        if (typeof(a)  != 'number') {
            throw new ReferenceError("First argument must be a number");
        }
        else if (typeof(b) != 'number') {
            throw new ReferenceError("Second argument must be a number");
        }
        else {
            console.log(a + b);
        }
    } catch(error) {
        console.log("Error!", error.message);
    }
}

addTwoNumbers(5, "10");
console.log("It still works");