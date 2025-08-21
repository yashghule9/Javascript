/*
===========================================================
  JavaScript Notes - Arrays (Lecture 8)
  
  Topic: Working with Arrays in JavaScript
===========================================================

📌 Why Arrays matter?
- Used to store multiple values in a single variable.
- Arrays are zero-indexed: first element is at index 0.
- Arrays can store mixed data types (numbers, strings, objects, etc.).
- Arrays are objects in JavaScript.

===========================================================
*/

// ---------------- Creating Arrays ----------------
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);  // Access element by index


// ---------------- Array Methods ----------------

// Adding and removing elements
// myArr.push(6);    // Add element at end
// myArr.push(7);    
// myArr.pop();      // Remove last element

// myArr.unshift(9); // Add element at beginning
// myArr.shift();    // Remove first element

// Searching in array
// console.log(myArr.includes(9));   // true or false
// console.log(myArr.indexOf(3));    // index or -1 if not found

// Converting array to string
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);


// ---------------- Slice vs Splice ----------------
console.log("A ", myArr);

// slice(start, end) returns a new array without modifying original
const myn1 = myArr.slice(1, 3);
console.log(myn1);          // [1, 2]
console.log("B ", myArr);   // Original array unchanged

// splice(start, count) modifies original array and returns removed elements
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);   // Modified array
console.log(myn2);          // Extracted elements [1, 2, 3]

/*
===========================================================
  ⚠️ Common Pitfalls:
  1. Array constructor with single number creates empty array of that length:
     new Array(3) → empty array of length 3
  2. slice() does NOT modify the original array, splice() DOES.
  3. Arrays compare by reference, not by value, so [1,2] == [1,2] is false.

===========================================================

💡 Mini Exercise:
1. Create an array of 5 favorite superheroes.
2. Add one more hero at the end using push().
3. Remove the first hero using shift().
4. Check whether "naagraj" exists in your array.
5. Use slice and splice on your array and observe the differences.

===========================================================
End of Notes
===========================================================
*/
