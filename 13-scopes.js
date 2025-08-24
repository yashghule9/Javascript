/*
===========================================================
  JavaScript Notes - Scopes and Hoisting (Lecture X)
 
  Topic: Variable Scopes, Function Scopes, and Hoisting in JavaScript
===========================================================

📌 Why Scopes & Hoisting matter?
- Understanding variable/function visibility and lifecycle is key to avoiding bugs.
- Hoisting affects when and how variables and functions are accessible.

===========================================================
*/

// Block scope with let and const
let a = 300;

if (true) {
    let a = 10;        // Different block-scoped variable
    const b = 20;      // Block-scoped constant
    // console.log("INNER: ", a);   // 10
}

// console.log(a);      // 300 (outer 'a')
// console.log(b);      // ReferenceError: b is not defined
// console.log(c);      // ReferenceError: c is not defined (if var c is commented out)


// Function scope and nested functions
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);    // Access outer function variable
    }
    // console.log(website);       // ReferenceError: website is not defined
    
    two();
}
// one();


// Block scope inside nested if
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website); // "hitesh youtube"
    }
    // console.log(website);  // ReferenceError: website is not defined
}

// console.log(username);    // ReferenceError: username is not defined


// ++++++++++++++++++ Hoisting Examples ++++++++++++++++++

console.log(addone(5));   // Works due to function declaration hoisting

function addone(num) {
    return num + 1;
}

// console.log(addTwo(5));   // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};
// Explanation: Function expressions are NOT hoisted; variables declared with const/let are hoisted but not initialized.

/*
===========================================================
⚠️ Common Pitfalls:
1. let and const are block-scoped; var is function-scoped.
2. Accessing let/const before declaration causes ReferenceError (temporal dead zone).
3. Function declarations are hoisted fully; function expressions are not.
4. Variables declared inside blocks/functions are not accessible outside.

===========================================================

💡 Mini Exercise:
1. Declare variables with var, let, and const inside and outside blocks; observe scope.
2. Write nested functions accessing outer variables.
3. Test hoisting with function declarations and expressions.
4. Try accessing variables before declaration to see errors.

===========================================================
End of Notes
===========================================================
*/


