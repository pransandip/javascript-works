//  Standard built-in objects - eval(script)
console.log(eval(2 ** 3));
console.log(eval(2 + 2));
console.log(eval("2 + 2"));

// If script is not a string primitive, eval() returns the argument unchanged.
console.log(eval(new String("2 + 2")));
console.log(eval([]));

console.log(eval("2 + 2") === eval("4")); // true
console.log(eval("2 + 2") === eval(new String("2 + 2"))); // false

const expression = new String("2 + 2");
console.log(eval(String(expression)));
