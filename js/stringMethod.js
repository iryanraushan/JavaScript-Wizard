let str = "Hello World!";

// string.charAt(index) : return character at any index
let ch = str.charAt(7);
console.log(ch); 

let ch1 = str.charAt(7.2);
console.log(ch1); 

let ch2 = str.charAt(7.8);
console.log(ch2); 

// str.length : length of string. 
let length = str.length
console.log(length);

// Note : 'Dont use length() becuase in javascript length is not function


// str.charCodeAt(index) : Return between 0 - 65535 representing UTF-16 code of character at given index.
let charCodeAt = str.charCodeAt(4);
console.log(charCodeAt);

// str.codePointAt(index) : Return unicode of character at given index.
let codePointAt = str.codePointAt(4)
console.log(codePointAt);

// str.concat(str1, ..., strN) : Returns a new string containing the combined text of the strings provided.

// Note : It will Not change origional string
let strTemp = " Ryan."
let newString = str.concat(strTemp)
console.log(newString);

console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(657, 52)); // 45

/*
str.endsWith(searchString) || str.endsWith(searchString, length) : 
The endswith() method returns: 
    true - if the given characters are found at the end of the string.
    false - if given characters are not found at the end of the string. 
*/
// Note : The endsWith() method is case sensitive. 

let sentence = "let's fun with javascript";

let check1 = sentence.endsWith("ipt");
let check2 = sentence.endsWith("thw");
console.log(`check1: ${check1}, check2 : ${check2}`);

/*
str.includes(searchString) || str.includes(searchString, index):
position (optional) - The position within str to begin searching for searchString. By default, it is 0.
includes() Return: 
    true- if searchString is found anywhere within str.
    false- if searchString is not found anywhere within str.
*/
// Note: The includes() method is case sensitive.

sentence = "Java is to JavaScript what Car is to Carpet.";
let check = sentence.includes("Java");
console.log(check); // true

// case sensitive
 check1 = sentence.includes("java");
console.log(check1); // false

// second argument specifies position to start at
 check2 = sentence.includes("Java", 20);
console.log(check2); // false

let check3 = sentence.includes("whose");
console.log(check3); // false

let check4 = sentence.includes("");
console.log(check4); // true