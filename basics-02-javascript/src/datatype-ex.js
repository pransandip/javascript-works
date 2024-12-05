let age = 22.5;
console.log(typeof age);
console.log(typeof Number("1"));

console.log(typeof null);
console.log(typeof [1, 2, 3]);

console.log(Array.isArray([1, 2, 3]));
console.log(typeof Array.isArray([1, 2, 3]));

console.log(typeof function () {});
console.log(typeof class C {});

console.log(typeof Math.sin);

const str = new String("Sandy");
console.log(typeof str);
console.log(str.endsWith("y"));

const num = new Number(2.0);
console.log(num.toFixed());
console.log(typeof num.toFixed());

const func = new Function("a,b,c", "return a+b+c");
console.log(typeof func);
console.log(func(1, 2, 3));

// convert string to number
let myNum = +"321";
console.log(typeof myNum);
console.log(myNum);

// BigInt
console.log(Number.MAX_SAFE_INTEGER);

let num2 = BigInt(123456789123456789123456789);
console.log(num2);
