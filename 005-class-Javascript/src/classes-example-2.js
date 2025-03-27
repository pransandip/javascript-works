class CreateUser {
  constructor({ firstName, lastName, age, email, city }) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.city = city;
  }

  about() {
    return `person name: "${this.firstName} ${this.lastName}" age: "${this.age}" city: "${this.city}"`;
  }

  is18() {
    return this.age >= 18;
  }
}

const user1 = new CreateUser({
  firstName: "Sandy",
  lastName: "Roy",
  age: 29,
  email: "pransandip@gmail.com",
  city: "Calcutta",
});

console.log(user1);
console.log(user1.age);
console.log(user1.about());

console.log(Object.getPrototypeOf(user1));
