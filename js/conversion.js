let value = "333"

console.log(typeof value);

let valueAfter = Number(value)

console.log(typeof valueAfter);
console.log(valueAfter);


value = "333weuf"


console.log(typeof value);

valueAfter = Number(value)    // NaN

console.log(typeof valueAfter);
console.log(valueAfter);

/*
"33" -> Number
"23es" -> NaN
true -> 1
false -> 0
*/

// Number and date has been assigned
// to variable v and d respectively
let v = 123;
let d = new Date('1995-12-17T03:24:00');
     
// Conversion of number to string
console.log(" String(v) = " + String(v));
     
// Conversion of number to string
console.log(" String(v + 11) = " + String(v + 11));
console.log(" String( 10 + 10) = " + String(10 + 10));
     
// Conversion of boolean value to string
console.log(" String(false) = " + String(false));
     
// Conversion of Date to string
console.log(" String(d) = " + String(d));