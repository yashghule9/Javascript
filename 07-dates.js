/*
===========================================================
  JavaScript Notes - Dates (Lecture 7)
  Author: Yash Ghule
  Topic: Working with Date and Time in JavaScript
===========================================================

📌 Why Dates matter?
- Used for logging, scheduling, timestamps, and time-based operations.
- JS Date object represents a single moment in time (in milliseconds since Jan 1, 1970 UTC).

===========================================================
*/

// ---------------- Creating Dates ----------------
let myDate = new Date();

// Different representations
// console.log(myDate.toString());        // Full date with time & timezone
// console.log(myDate.toDateString());    // Human-readable date only
// console.log(myDate.toLocaleString());  // Date + time in local format
// console.log(typeof myDate);            // "object"

// ---------------- Custom Dates ----------------
// Months are 0-based in JS: (0 = Jan, 11 = Dec)
let myCreatedDate = new Date(2023, 0, 23);         // Jan 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Jan 23, 2023, 05:03
// let myCreatedDate = new Date("2023-01-14");      // ISO format → Jan 14, 2023
// let myCreatedDate = new Date("01-14-2023");      // MM-DD-YYYY format
// console.log(myCreatedDate.toLocaleString());


// ---------------- Timestamps ----------------
// Timestamp = milliseconds since Jan 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Current timestamp in ms
// console.log(myCreatedDate.getTime()); // Timestamp of specific date

// Convert to seconds (common in APIs)
// console.log(Math.floor(Date.now() / 1000));


// ---------------- Date Methods ----------------
let newDate = new Date();

console.log(newDate);              // Full date object
console.log(newDate.getMonth() + 1); // Month (1–12) → add 1 because JS is 0-based
console.log(newDate.getDay());       // Day of week (0 = Sunday, 6 = Saturday)

// Example: Using template literals
// console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`);

// ---------------- Locale Formatting ----------------
console.log(
  newDate.toLocaleString('default', {
    weekday: "long",   // Full weekday name (e.g., Monday)
    month: "long",     // Full month name (e.g., January)
    day: "numeric",
    year: "numeric"
  })
);

/*
===========================================================
  ⚠️ Common Pitfalls:
  1. Months are zero-indexed → January = 0, December = 11.
  2. Date parsing can behave differently in different locales 
     (better to use YYYY-MM-DD format for consistency).
  3. Timezones affect how dates are displayed. Use UTC 
     methods if you want standardized time.
===========================================================

💡 Mini Exercise:
- Print today’s date in format: DD/MM/YYYY
- Print current time in format: HH:MM:SS

===========================================================
End of Notes
===========================================================
*/
