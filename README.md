# Learn-JavaScript

```
// Alert Message.

alert("Hii.. I just start learning javascript.");
```
>Output :

![This is an image](./OutputImages/Screenshot%20from%202023-02-04%2022-39-26.png)

## Print Hello World! on console
```
console.log('Hello World!');
```
>Output : 
```
Hello World!
```

# Variable And Datatypes
## Data Types
### 7 data types available in JavaScript.

#### Primitive
1. Number - Represents integer and floating values.
2. String - Represents Textual data.
3. Boolean - Logical entity with values as true or false.
4. Undefined - Represents a variable whose value is not yet assigned.
5. Null - Represents the intentional absence of value.
6. Symbol - Represent a unique value.

#### Non-Primitive
7. Object - Represents Key-value pair.

## Variables
*variables are named containers for storing data.*

### 3 types to declare a JavaScript variable.
1. Using var
2. Using let
3. Using const

### Variable Declaration

```
var temp;
```
Note : *Here temp is the variable name without any value. By default, it assigned with **undefined***

### Variable Definition

```
var temp = 30;
```
Note : *Here temp variable is assigned with a value of 10.*

# JavaScript Identifiers
Javascript variables are identified with some unique name. These unique names are called identifiers.

## Rules for assigning unique identifiers to a variable:
- Names can contain letter ( a - z, A - Z ), digit (0-9), underscore ( _ ), and doller ( $ ) sign.
- Must start with a letter ( a - z or A - Z), underscore ( _ ) and dollor ( $ ) sign.
- Case sensitive (A and a both are different).
- Reversed keyword can't be used as a name.

#### Example : 
```
var ryan; // No error
var _ryan; // No error
var *ryan; // Uncaught Syntax error
var 1ryan; // Uncaught Syntax error
```

### typeof(value) method

**Note : typeof(value) ==> use to know datatype**
```
var stringType = "i am ryan";
console.log(stringType," Data type is : ", typeof(stringType));

var numberType = 87;
console.log(numberType," Data type is : ", typeof(numberType));

var booleanType = false;
console.log(booleanType," Data type is : ",  typeof(booleanType));

var bigIntType = 87664832555;
console.log(bigIntType," Data type is : ",  typeof(bigIntType));

var undefinedType; // undefined type.
console.log(undefinedType," Data type is : ", typeof(undefinedType))

```
> Output : 
```
i am ryan  Data type is :  string
87  Data type is :  number
false  Data type is :  boolean
87664832555  Data type is :  number
undefined  Data type is :  undefined
```

# Assigning values to a variable

**Note : In javascript, you don't have to tell Javascript during variable declarartion what value the variable will hold.**

#### Example : 
```
var value = 10;

console.log(value);

value = "I am ryan";

console.log(value)
```
> Output : 

```
10
I am ryan
```

**Note: Use the var keyword only for declaration or initialization., once for the life of any variable name in a document. You should not re-declare the same variable**


```
var temp = 10;

var temp = "Ryan Raushan" // No Error // Bit don't use var again for same variable.
```

## Declaring multiple variable at the same time.

```
var temp1 = 12, temp2 = 30, temp3 = "Ryan";
```

## Re-Declaring of a variable.

```
var temp;

console.log(temp);
```
> Output : 
```
undefined
```

But 

```
var name = "ryan raushan";

var name;

console.log(name)
```
> output : 
```
ryan raushan
```

**Note : Re-Declaring the variable doesn't make any difference to the value.**

**Note : variable takes the most recent assigned value to it.**


# JavaScript Operators
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

var x = 30;
var y = 20;
console.log(x)      // output : 30
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


// 3. Exponentiation Assignment   (x **= y)   (x = x ** y)
var value3 = 5;
value3 **= 3;
console.log(value3)     // output : 125
```

## 2. Arithmetic Operator

- Addition Operator ( x + y ) 
- Subtraction Operator( x - y ) 
- Multiplication Operator ( x * y )
- Devision Operator ( x / y )
- Modulus Operator ( x % y ) 
- Exponentiation Operator  (x ** y)  
- Increament Operator  ( x++ ) (++x)
- Decreament Operator ( x-- )  (--x)

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

- **==**	==>    Is equal to
- **===**	==>    Identical (equal and of same type)
- **!=**	==>    Not equal to
- **!==**	==>    Not Identical
- **>**	    ==>    Greater than
- **>=**	==>    Greater than or equal to	
- **<**	    ==>    Less than	
- **<=**	==>    Less than or equal to	

## 4. Bitwise Operator

- **&**	  ==>   Bitwise AND
- **|**	  ==>   Bitwise OR	
- **^**	  ==>   Bitwise XOR	
- **~**	  ==>   Bitwise NOT	
- **<<**  ==>   Bitwise Left Shift	
- **>>**  ==>   Bitwise Right Shift	
- **>>>** ==>   Bitwise Right Shift with Zero

## 5. Logical Operator

- &&    ==>	    Logical AND	(10==20 && 20==33) = false
- ||    ==>	    Logical OR	(10==20 || 20==33) = false
- !	    ==>     Logical Not	!(10==20) = true


## 6. Special Operator 

- **(?:)**	==>         Conditional Operator returns value based on the condition. It is like if-else.
- **,** ==>	            Comma Operator allows multiple expressions to be evaluated as single statement.
- **delete** ==>        Delete Operator deletes a property from the object.
- **in** ==>	        In Operator checks if object has the given property
- **instanceof** ==>    checks if the object is an instance of given type
- **new** ==>           creates an instance (object)
- **typeof** ==>	    checks the type of object.
- **void**	==>         it discards the expression's return value.
- **yield**	==>         checks what is returned in a generator by the generator's iterator.
