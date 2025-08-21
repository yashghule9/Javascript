/*
===========================================================
  JavaScript Notes - Numbers & Math (Lecture 6)
  
  Topic: Number methods and Math object operations
===========================================================

Key Points:
1. Numbers in JS are by default floating-point (64-bit).
2. `Number` object provides extra methods like toFixed, toPrecision.
3. Math object provides utility functions for rounding, min/max,
   random number generation, etc.
===========================================================
*/

// ---------------- Number Basics ----------------
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// Convert to string
// console.log(balance.toString().length); // "100" → length 3

// Fixed decimal places
// console.log(balance.toFixed(1)); // "100.0"

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // "123.9"

// Localized number formatting
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"


// ---------------- Math Object ----------------
// console.log(Math);           // Math object reference
// console.log(Math.abs(-4));   // 4
// console.log(Math.round(4.6));// 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9));// 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// Random number between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// ---------------- Random Number in a Range ----------------
const min = 10;
const max = 20;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
===========================================================
End of Notes
===========================================================
*/
