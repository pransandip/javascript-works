/*
 * To load an commonjs module, set "type": "commonjs" in
 * the package.json or use the .cjs extension.
 */

const lib = require("./lib.cjs");

console.log(lib);
console.log(lib.sum(5, 5));
console.log(lib.diff(10, 5));
