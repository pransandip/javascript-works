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
