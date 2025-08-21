/*
===========================================================
  JavaScript Notes - Variables & Constants (Lecture 1)
  Topic: Understanding const, let, var
===========================================================

Key Points:
1. Use `const` when the value should never change.
2. Use `let` for variables that may be reassigned.
3. Avoid `var` (old style) due to issues with block scope 
   vs functional scope.
4. Default declaration without let/const/var is not good 
   practice (e.g., accountCity = "Jaipur").

===========================================================
*/

// Constant declaration (cannot be reassigned)
const accountId = 144553;

// Variables with let (can be reassigned later)
let accountEmail = "hitesh@google.com";

// Avoid using var (function scoped, not block scoped)
var accountPassword = "12345";

// Declared without let/const/var (not recommended)
accountCity = "Jaipur";

// Undefined variable (value not assigned yet)
let accountState;

// Trying to reassign a const will throw an error
// accountId = 2; // ❌ Not allowed

// Reassigning let/var variables
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// Logging values
console.log(accountId);

// Display values in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
===========================================================
End of Notes
===========================================================
*/
