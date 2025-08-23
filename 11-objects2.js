/*
===========================================================
  JavaScript Notes - Objects & Destructuring (Lecture X)
  
  Topic: Object Creation, Merging, Nested Objects, and Destructuring
===========================================================

📌 Why Objects matter?
- Objects store keyed data and are foundational to JS data structures.
- Supports nested objects, merging, and destructuring for clean code.

===========================================================
*/

// Creating objects
// const tinderUser = new Object();  // Object constructor
const tinderUser = {};              // Object literal (preferred)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


// Nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};
// Access nested property
// console.log(regularUser.fullname.userfullname.firstname);


// Merging objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// Using spread operator
const obj3 = {...obj1, ...obj2};
// console.log(obj3);



// Array of users (objects)
const users = [
    {id: 1, email: "h@gmail.com"},
    {id: 2, email: "h2@gmail.com"},
    {id: 3, email: "h3@gmail.com"},
];

// Accessing an email inside array of objects
// console.log(users[1].email);


// Object methods

// console.log(Object.keys(tinderUser));       // ['id', 'name', 'isLoggedIn']
// console.log(Object.values(tinderUser));     // ['123abc', 'Sammy', false]
// console.log(Object.entries(tinderUser));    // [['id', '123abc'], ['name', 'Sammy'], ...]

// Check if key exists
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


// Destructuring with renaming
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring with alias
const { courseInstructor: instructor } = course;
// console.log(instructor);  // "hitesh"


/*
===========================================================
⚠️ Common Pitfalls:
1. Object.assign() and spread operator create shallow copies only.
2. Modifying nested objects after merge can affect originals.
3. Destructuring requires exact key names; renaming with colons is handy.
4. Array of objects access requires correct indices.

===========================================================

💡 Mini Exercise:
1. Create objects using both literal and constructor syntax.
2. Nest objects and access nested properties.
3. Merge multiple objects with Object.assign and spread syntax.
4. Destructure objects with renaming variables.
5. Explore Object.keys, values, entries, and hasOwnProperty.

===========================================================
End of Notes
===========================================================
*/
