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
#### There Are 7 data types available in JavaScript.

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

#### 3 types to declare a JavaScript variable.
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
- Names can contain letter ( a - z, A-Z ), digit (0-9), underscore (_), and doller ($) sign.
- Must start with a letter (a-z or A-Z), underscore(_) and dollor($) sign.
- Case sensitive (A and a both are different).
- Reversed keyword can't be used as a name.

#### Example : 
```
var ryan; // No error
var _ryan; // No error
var *ryan; // Uncaught Syntax error
var 1ryan; // Uncaught Syntax error
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

