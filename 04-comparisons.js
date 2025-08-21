/*
===========================================================
  JavaScript Notes - Comparisons & Equality (Lecture 4)

  Topic: Comparison operators, == vs ===, pitfalls of null/undefined
===========================================================

Key Points:
1. Comparison operators: >, >=, <, ==, !=
2. JavaScript converts values to numbers when comparing
   with relational operators (>, <, >=, <=).
3. `==` does type conversion before comparison.
4. `===` (strict equality) checks both value and type.
5. Special cases with `null` and `undefined`:
   - null >= 0 → true  (because null is converted to 0)
   - null > 0  → false
   - null == 0 → false
   - undefined compared to anything → always false
===========================================================
*/

// Basic comparisons
// console.log(2 > 1);   // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);   // false
// console.log(2 == 1);  // false
// console.log(2 != 1);  // true

// String vs Number (JS does type conversion)
// console.log("2" > 1);   // true ("2" → number 2)
// console.log("02" > 1);  // true

// ---------------- Null Comparisons ----------------
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true  (null → 0 in >=)

// ---------------- Undefined Comparisons ----------------
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// ---------------- Strict Equality ----------------
console.log("2" === 2);  // false (string !== number)

/*
===========================================================
End of Notes
===========================================================
*/
