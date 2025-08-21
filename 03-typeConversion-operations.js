/*
===========================================================
  JavaScript Notes - Type Conversion & Operations (Lecture 3)
  
  Topic: Type Casting, Operators, String + Number behavior
===========================================================

Key Points:
1. Explicit type conversion:
   - Number()
   - Boolean()
   - String()
2. Implicit type conversion happens in expressions.
3. "NaN" means "Not a Number" (result of invalid number conversion).
4. Operator precedence affects expression results.
5. Beware of unexpected results when mixing strings and numbers.
===========================================================
*/

// ---------------- Type Conversion ----------------

// String to Number
let score = "hitesh";
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // "number"
// console.log(valueInNumber);        // NaN

// Conversion cases:
// "33"   => 33
// "33abc" => NaN
// true   => 1; false => 0

// Boolean Conversion
let isLoggedIn = "hitesh"; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// Conversion cases:
// 1   => true; 0 => false
// ""  => false
// "hitesh" => true

// Number to String
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);       // "33"
// console.log(typeof stringNumber); // "string"


// ---------------- Operations ----------------

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// Arithmetic operators
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/3);
// console.log(2%3);

// String concatenation
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// console.log(str3); // "hello hitesh"

// Interesting cases with strings + numbers
// console.log("1" + 2);    // "12"
// console.log(1 + "2");    // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// Operator precedence
// console.log((3 + 4) * 5 % 3); // 2

// Unary operators
// console.log(+true);  // 1
// console.log(+"");    // 0

// Multiple assignments
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // all become 4

// Increment operator
let gameCounter = 100;
++gameCounter; // pre-increment
console.log(gameCounter); // 101

// Reference for further study:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/*
===========================================================
End of Notes
===========================================================
*/
