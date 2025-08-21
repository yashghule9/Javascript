/*
===========================================================
  JavaScript Notes - Strings (Lecture 5)
  Topic: String declaration, methods, and operations
===========================================================

Key Points:
1. Strings can be declared using "", '', or template literals (``).
2. Template literals allow variable interpolation.
3. Strings are immutable, but JS provides many helper methods.
4. String objects (`new String()`) have methods and properties.
===========================================================
*/

const name = "hitesh";
const repoCount = 50;

// Old way (not recommended)
// console.log(name + repoCount + " Value");

// Modern way: Template literals (string interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ---------------- String Object ----------------
const gameName = new String('hitesh-hc-com');

// Index access
// console.log(gameName[0]); // "h"
// console.log(gameName.__proto__); // object with string methods

// Properties & methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));   // "t"
console.log(gameName.indexOf('t')); // 2

// ---------------- Substring & Slice ----------------
const newString = gameName.substring(0, 4); 
console.log(newString); // "hite"

// slice() allows negative indexes
const anotherString = gameName.slice(-8, 4); 
console.log(anotherString); // ""

 // ---------------- Trimming ----------------
const newStringOne = "   hitesh    ";
console.log(newStringOne);          // "   hitesh    "
console.log(newStringOne.trim());   // "hitesh"

// ---------------- Replace & Includes ----------------
const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-')); // replaces %20 with "-"
console.log(url.includes('sundar'));  // false

// ---------------- Split ----------------
console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ]

/*
===========================================================
End of Notes
===========================================================
*/
