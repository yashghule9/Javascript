/*
===========================================================
  JavaScript Notes - Data Types & Basics (Lecture 2)
 
  Topic: Primitive Data Types & typeof Operator
===========================================================

Key Points:
1. "use strict" ensures JavaScript runs in modern (strict) mode.
2. Node.js environment does not support `alert()` (browser only).
3. Write code with high readability.
4. JavaScript has 7 primitive data types:
   - number
   - bigint
   - string
   - boolean
   - null
   - undefined
   - symbol
5. `typeof` operator is used to check the type of a value.
   - typeof undefined  -> "undefined"
   - typeof null       -> "object" (historical bug in JS)

===========================================================
*/

"use strict"; // treat all JS code as newer version

// alert(3 + 3) // ❌ not supported in Node.js, only browser

// Good practice: keep code clean & readable
console.log(3 + 3); 
console.log("Hitesh");

// Variables
let name = "hitesh";       // string
let age = 18;              // number
let isLoggedIn = false;    // boolean
let state;                 // undefined

// Data types in JavaScript:
// number  => 2^53 range
// bigint  => larger integers
// string  => "", '', ``
// boolean => true / false
// null    => standalone empty value
// undefined => variable declared but not assigned
// symbol  => unique identifiers

// object (non-primitive) will be covered later

// typeof operator examples
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (known bug in JS)

/*
===========================================================
End of Notes
===========================================================
*/
