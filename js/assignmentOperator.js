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


// 4. Right Shift Assignment   (x >>= y)    (x = x >> y)
value3 >>= 1;
console.log(value3)     // output : 62


// 4. left Shift Assignment   (x <<= y)    (x = x << y)
var value = 5;
value <<= 1;
console.log(value)      // output : 10


// 5. Bitwise XOR Assignment   (x ^= y)    (x = x ^ y)
var value = 5;
value ^= 3;
console.log(value)      // output : 6