/*
 * In node every file is a module
 * common js exports
 */

exports.diff = (a, b) => {
  return a - b;
};

function sum(a, b) {
  return a + b;
}
exports.sum = sum;
