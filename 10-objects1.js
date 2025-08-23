/*
===========================================================
  JavaScript Notes - Objects (Lecture X)
 
  Topic: Working with Objects in JavaScript
===========================================================

📌 Why Objects matter?
- Objects store data as key-value pairs.
- Keys can be strings or symbols; values can be any data type including functions.
- Objects support dynamic modification and methods.

===========================================================
*/

// Creating a symbol for unique key
const mySym = Symbol("key1");

// Object literal with various key types and values
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",           // Symbol key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Accessing object properties
// console.log(JsUser.email);           // Dot notation
// console.log(JsUser["email"]);        // Bracket notation
// console.log(JsUser["full name"]);    // Bracket notation for keys with spaces
// console.log(JsUser[mySym]);          // Access symbol-keyed property

// Modifying object properties
JsUser.email = "hitesh@chatgpt.com";

// Object.freeze(JsUser); // Freezes the object — no further modifications allowed

// Attempt to modify after freezing (will NOT change if freeze is active)
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser.email); // Output depends on whether freeze is active

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling methods
console.log(JsUser.greeting());      // Logs message, returns undefined
console.log(JsUser.greetingTwo());   // Logs message with name, returns undefined

/*
===========================================================
⚠️ Common Pitfalls:
1. Symbol keys are not enumerable and don’t appear in for...in loops.
2. Object.freeze() prevents any future changes to the object properties.
3. The 'this' keyword inside methods refers to the object calling the method.

===========================================================

💡 Mini Exercise:
1. Create an object with different key types, including a symbol key.
2. Access properties using both dot and bracket notation.
3. Add methods that use 'this' to access object properties.
4. Freeze the object and try modifying a property; observe the behavior.
5. Enumerate the object's keys using Object.keys() and Object.getOwnPropertySymbols().

===========================================================
End of Notes
===========================================================
*/
