function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));
