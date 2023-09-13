# Learn-JavaScript

- Print Hello World! on console
```
console.log('Hello World!');
```
>Output : 
```
Hello World!
```

# Variables in Javascript

Variables are Containers for Storing Data

- 3 types to declare a JavaScript variable.
1. Using var
2. Using let
3. Using const

- Variable Declaration

```
var temp;
```
> Note : Here temp is the variable name without any value. By default, it assigned with ```undefined```.

- Variable Definition

```
var temp = 30;
```
> Note : *Here temp variable is assigned with a value of 10.*- JavaScript Identifiers

Javascript variables are identified with some unique name. These unique names are called identifiers.
- Rules for assigning unique identifiers to a variable:
    - Names can contain letter ( a - z, A - Z ), digit (0-9), underscore ( _ ), and doller ( $ ) sign.
    - Must start with a letter ( a - z or A - Z), underscore ( _ ) and dollor ( $ ) sign.
    - Case sensitive (A and a both are different).
    - Reversed keyword can't be used as a name.

```
var ryan;   // No error
var _ryan;  // No error
var *ryan;  // Uncaught Syntax error
var 1ryan;  // Uncaught Syntax error
```

# Data Types in Javascript : 

Data Type is the type of data a variable stores. 
In JavaScript, a variable can store different types of data. 

- Primitive
1. Number - Represents integer and floating values.
2. String - Represents Textual data.
3. Boolean - Logical entity with values as true or false.
4. Undefined - Represents a variable whose value is not yet assigned.
5. Null - Represents the intentional absence of value.
6. Symbol - Represent a unique value.

- Non-Primitive
7. Object - Represents Key-value pair.

- Example : 
```    
let temp = 10 ;// Number 
let temp2 =  “JavaScript Wizard” // String 
```

> Note : JavaScript evaluates data from left to the right. 
```
let temp = “JavaScript Wizard”  +  1 ; // JavaScript Wizard1
let temp = 6 + 8 + “JavaScript Wizard” ; // 14JavaScript Wizard
 ```

- Dynamically Typed Language
Javascript is a dynamic typing language, unlike Java/C++. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type of this variableis based on the value assigned to at the run time. 

A variable can be assigned any type of value, and you need not mention the type. 

```        
let temp = 2 ; 
let temp = true ; 
```

- typeof Operator 
The typeof operator is a unary operator placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand.  The typeof operator evaluates to "number", "string", or "boolean" if its operand is a number, string, or boolean value and returns true or false based onthe evaluation. TypeString Returned by typeof 

| Type      |	typeof return value | 	Object wrapper |
| --------- | ------------- | ---------- |
| Null      |	"object" | 	N/A |
| Undefined |	"undefined" | 	N/A |
| Boolean   |	"boolean" | 	Boolean |
| Number    |	"number" | 	Number |
| BigInt    |	"bigint" | 	BigInt |
| String    |	"string" | 	String |
| object    | "object"   | Object |
| Symbol    |	"symbol" | 	Symbol |

- There are 6 primitive and 1  non-primitive data types: 

1.Number: It represents variables whose value is eitheran integer or float. Other than integer and float numbers, it has three symbolic values:+Infinity,-Infinity, andNaN. The number lies between+Infinityand-Infinity. 
```
let temp = 10 ; 
typeof(temp) ;  // number 
let temp = 10.54 ; 
typeof(temp) ;  // number 
let temp = NaN ; 
typeof(temp) ;  // number 
```
> In JavaScript, NaN is also of type Number. 

2. String: It represents textual data. The string contains elements that can be accessed using the index. The first element has an index of type., "hello", "1234", "12here". You can access each string element like- str = "HelloWorld", then str[1] will output 'e' on the console. 
```
typeof(5) ;  // number 
typeof(“5”) ; // string 
typeof("true"); // string
```

3. Undefined: 'undefined' is the value assigned to thevariable that has not yet been assigned any value. We can also explicitly assignan 'undefined' value to a variable, but that does not make any sense due toits meaning. Example:var a ; Defines a variable that has not been assigned any value. 

```
console.log(a) ; // Output - 'undefined' 
```
4. Boolean: Booleans can only have two values: true or false. It is often used for conditional testing. 
```
let x = 2 , y = “2” ,  z = 3 ; 
console.log(x==y) ;   // true 
console.log(x===y) ;  // false 
console.log(x==z) ;   // false 
```

5. null:'null' is the value that represents a referencethat points to a non-existent object or address. This means that there is an absenceof a value. The data type for the null value is "Object". 

6. NaN: 'NaN' meansNot-A-Number. So, if any expressionfails to return a number, then 'NaN' is printed on the console 
```
typeof(NaN) ; // Number 

(12 - "abc") ; cannot be evaluated to a number, so 'NaN' is printedon the console.
```

- Declaring multiple variable at the same time.
```
var temp1 = 12, temp2 = 30, temp3 = "Ryan";
```

# Operators in Javascript
* operators are symbols that are used to perform operations on operands.*

### 6 operator in javascript
1. Assignment Operator
2. Arithmetic Operator
3. Relational Operator
4. Bitwise Operator
5. Logical Operator
6. Special Operator

## 1. Assignment Operator

- Assign  ( = )
- Add and assign   ( x += y )  (x = x + y)
- Subtract and assign ( x -= y )  (x = x - y)
- Multiply and assign ( x *= y )  (x = x * y)
- Devide and assign ( x /= y )  (x = x / y)
- Modulus and assign ( x %= y )  (x = x % y)
- Exponentiation Assignment   (x **= y)   (x = x ** y)

**An assignment operator assigns a value to its left operand. based on the value of its right operand.The simple assignment operator is equal (=).**

#### Example :
```
// - Assign =>  =

var y = 20;
console.log(y)      // output : 20

// - Add and assign =>  +=
y += x; // y = y + x
console.log(y);     // output : 50

// - Subtract and assign => -=
y -= x; // y = y - x
console.log(y);     // output : 20

// - Multiply and assign => *=
y *= 2; // y = y * 2
console.log(y);     // output : 40

// - Devide and assign => /=

x /= 2; // x = x / 2
console.log(x);     // output : 15

// - Modulus and assign => %=
x %= 3; // x = x % 3
console.log(x);     // output : 0

// - Exponentiation Assignment   (x **= y)   (x = x ** y)
var value3 = 5;
value3 **= 3;
console.log(value3)     // output : 125
```

## 2. Arithmetic Operator

- Addition Operator       :  ( x + y ) 
- Subtraction Operator    :  ( x - y ) 
- Multiplication Operator :  ( x * y )
- Devision Operator       :  ( x / y )
- Modulus Operator        :  ( x % y ) 
- Exponentiation Operator :  (x ** y)  
- Increament Operator     :  ( x++ ) (++x)
- Decreament Operator     :  ( x-- )  (--x)

#### Example : 
```
var x = 50;
var y = 25;

// - Addition Operator ( x += y )
console.log(" x + y = ", x + y); // Output : 75

// - Subtraction Operator( x - y )
console.log(" x - y = ", x - y); // Output : 25

// - Multiplication Operator ( x * y )
console.log(" x * y = ", x * y); // Output : 1250

// - Devision Operator ( x / y )
console.log(" x / y = ", x / y); // Output : 2

// - Modulus Operator ( x % y )
console.log(" x % 5 = ", x % 5); // Output : 0

// - Exponentiation Operator  (x ** y)
console.log(" x ** 2 = ", x ** 2); // Output : 2500

// - increament Operator  ( x++ ) (++x)

//preincreament : 1st increase value by 1 then use

console.log("++x = ", ++x); // Output : 51

// post increament : 1st use then increase value by 1

console.log(" x++ = ", x++); // Output : 51

// - Decreament Operator ( x-- )  (--x)

//pre Decreament : 1st decrease value by 1 then use
console.log("--x = ", --x); // Output : 51

// post Decreament : 1st use then decrease value by 1
console.log("x-- = ", x--); // Output : 51
```

## 3. Relational Operator

```
 ==   :  Is equal to
 ===  :  Identical (equal and of same type)
 !=   :  Not equal to
 !==  :  Not Identical
 >    :  Greater than
 >=   :  Greater than or equal to	
 <    :  Less than	
 <=   :  Less than or equal to	
```
## 4. Bitwise Operator

``` 
 &	   :  Bitwise AND
 |	   :  Bitwise OR	
 ^	   :  Bitwise XOR	
 ~	   :  Bitwise NOT	
 <<   :  Bitwise Left Shift	
 >>   :  Bitwise Right Shift	
 >>>  :  Bitwise Right Shift with Zero
```
## 5. Logical Operator

``` 
&&   :  Logical AND	(10==20 && 20==33) = false
 ||  :  Logical OR	(10==20 || 20==33) = false
 !	  :  Logical Not	!(10==20) = true
```

## 6. Special Operator 

```
?:	         : Conditional Operator returns value based on the condition. It is like if-else.
,           : Comma Operator allows multiple expressions to be evaluated as single statement.
delete      : Delete Operator deletes a property from the object.
in	         : In Operator checks if object has the given property
instanceof  : checks if the object is an instance of given type
new         : creates an instance (object)
typeof 	    : checks the type of object.
void	       : it discards the expression's return value.
yield	      : checks what is returned in a generator by the generator's iterator.
```
# String in javascript : 

A JavaScript string stores a series of characters.
```
let str = "Hello World!";
```

- str.length : length of string. 
```
let length = str.length
console.log(length);
```
> Note : 'Dont use length() becuase in javascript length is not function

- string.charAt(index) : return character at any index
```
let ch = str.charAt(7);
console.log(ch); 

let ch1 = str.charAt(7.2);
console.log(ch1); 

let ch2 = str.charAt(7.8);
console.log(ch2); 
```

- str.charCodeAt(index) : Return between 0 - 65535 representing UTF-16 code of character at given index.
```
let charCodeAt = str.charCodeAt(4);
console.log(charCodeAt);
```
- str.codePointAt(index) : Return unicode of character at given index.
```
let codePointAt = str.codePointAt(4)
console.log(codePointAt);
```
- str.concat(str1, ..., strN) : Returns a new string containing the combined text of the strings provided.
```
let strTemp = " Ryan."
let newString = str.concat(strTemp)
console.log(newString);

console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(657, 52)); // 45
```
> Note : It will Not change origional string

- str.endsWith(searchString) || str.endsWith(searchString, length) : 
- method returns: 
    - true - if the given characters are found at the end of the string.
    - false - if given characters are not found at the end of the string. 
- length (optional) :  It is used as the length of str where searchString is searched. Default value is str.length. 
```
let sentence = "let's fun with javascript";
let check1 = sentence.endsWith("ipt");
let check2 = sentence.endsWith("thw");
console.log(`check1: ${check1}, check2 : ${check2}`);
```
> Note : The endsWith() method is case sensitive. 

- str.includes(searchString) || str.includes(searchString, index):
- Method return: 
    - true- if searchString is found anywhere within str.
    - false- if searchString is not found anywhere within str.
- index (optional) - The position within str to begin searching for searchString. By default, it is 0.
```
let sentence = "Java is to JavaScript what Car is to Carpet.";
let check = sentence.includes("Java");
console.log(check); // true

// case sensitive
let check1 = sentence.includes("java");
console.log(check1); // false

// second argument specifies position to start at
let check2 = sentence.includes("Java", 20);
console.log(check2); // false

let check3 = sentence.includes("whose");
console.log(check3); // false

let check4 = sentence.includes("");
console.log(check4); // true
```
> Note: The includes() method is case sensitive.


# Array is javascript : 

- The difference between slice(start, end) and splice(start, end) is : 
    - slice() : Method return an array from index start to (end-1) .
    - splice(): Method return an removed array from origional array from index start to end.
```
let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(`Origional array : ${myArr}`); // Origional array : 0,1,2,3,4,5,6,7,8,9

let sliceArray = myArr.slice(2, 6)

console.log(`Sliced array : ${sliceArray}`); // Sliced array : 2,3,4,5

console.log(`Origional array After slice : ${myArr}`); // Origional array After slice : 0,1,2,3,4,5,6,7,8,9

let spliceArray = myArr.splice(2, 6)

console.log(`Sliced array : ${spliceArray}`); // Sliced array : 2,3,4,5,6,7

console.log(`Origional array After splice : ${myArr}`); // Origional array After splice : 0,1,8,9
```
