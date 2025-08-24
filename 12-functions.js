/*
===========================================================
  JavaScript Notes - Functions (Lecture X)
  
  Topic: Function Basics, Parameters, Default Values, Rest Params, and Objects as Args
===========================================================

📌 Why Functions matter?
- Functions encapsulate reusable blocks of code.
- Support parameters, return values, and default values for flexibility.
- Accept objects and arrays as arguments for powerful abstractions.

===========================================================
*/

// Basic function that logs each letter
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();


// Function with parameters and return value
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);


// Function with default parameter and early return
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());


// Function with rest parameters to collect extra args in array
function calculateCartPrice(val1, val2, ...num1) {
    return num1;   // returns array of extra arguments beyond first 2
}
// console.log(calculateCartPrice(200, 400, 500, 2000));  // [500, 2000]


// Passing object as parameter
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    // Note: property name is 'price' not 'prices' in function prompt
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});


// Function that returns second element of an array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


/*
===========================================================
⚠️ Common Pitfalls:
1. Default parameters only apply if argument is undefined, not null or empty string.
2. Rest parameters must be last in parameter list.
3. Objects passed to functions are mutable by reference.
4. Return keyword stops function execution and returns value.

===========================================================

💡 Mini Exercise:
1. Write function to greet user with default name.
2. Write function that sums any number of arguments.
3. Pass object to function and print its properties.
4. Extract and return specific element from array argument.

===========================================================
End of Notes
===========================================================
*/
