/*
===========================================================
  JavaScript Notes - Arrays Advanced (Lecture X)
  
  Topic: Advanced Array Operations in JavaScript
===========================================================

📌 Why know advanced array operations?
- Useful in combining arrays, flattening nested arrays, and converting other structures to arrays.
- Helps in clean, concise data manipulation.

===========================================================
*/

// Define arrays
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing one array inside another adds nested array
// marvel_heros.push(dc_heros); 
// console.log(marvel_heros);    
// console.log(marvel_heros[3][1]); // Accessing nested array element ("flash")

// Combining arrays

// Using concat()
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Using spread operator (ES6+)
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


// Nested arrays and flattening

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(Infinity) flattens nested arrays to single dimension
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// Check if value is an array
console.log(Array.isArray("Hitesh"));  // false
console.log(Array.isArray(["Hitesh"])); // true

// Convert iterable or array-like objects to array
console.log(Array.from("Hitesh"));      // ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})); // [] because object has no length or iterable properties


// Creating arrays from arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // [100, 200, 300]

/*
===========================================================
⚠️ Common Pitfalls:
1. Pushing array inside array creates nested arrays, not merged arrays.
2. flat() helps convert nested arrays but beware of very deep nesting.
3. Array.from() works with iterable or array-like structures, plain objects return empty arrays.

===========================================================

💡 Mini Exercise:
1. Merge two arrays using both concat() and spread operator.
2. Create a nested array and flatten it using flat().
3. Convert a string to an array using Array.from().
4. Try Array.isArray() with various types (array, string, object).
5. Use Array.of() to create arrays from individual arguments.

===========================================================
End of Notes
===========================================================
*/
