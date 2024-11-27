"use strict";

var userName = "sandy001";
var userName = "koko";
console.log(userName);

var value = 2;
console.log(value ** 8);

// square root
console.log(value ** 0.5);

const pi = 3.14;
console.log(pi * 2 * 2);

// String Indexing
let firstName = "Sandip";
console.log(firstName[0]);
console.log(firstName.length);
console.log(firstName[firstName.length - 2]);

// String methodes: strings are immutable
// It will give us new string
let word = "  javascript  ";
console.log(word.length);
console.log(word.trim());
console.log(word.trimEnd());
console.log(word.trimStart());

// Slice(startIndex, endIndex) end index is exclusive
let word2 = "sandy";
console.log(word2.slice(1)); // andy
console.log(word2.slice(0, 3)); // san

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());

// apply, call, bind
// function borrowing call(thisArg, arryArg)
let names = {
  first_name: "Sandip",
  last_name: "Roy",
};
let names2 = {
  first_name: "Sandy",
  last_name: "Roy",
};

const printFullName = function (hometown, state) {
  console.log(
    `${this.first_name} ${this.last_name} from  ${hometown}, ${state}`
  );
};

printFullName.call(names, "kolkata", "WB");
printFullName.call(names2, "kalchini", "WB");
printFullName.apply(names2, ["kalchini", "WB"]); // takes arguments as array

// bind method: it will retun a method which can be call later
const details = printFullName.bind(names, "kolkata", "WB");
details();
