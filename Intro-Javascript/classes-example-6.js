// super = refers to the parent class.
//         commonly used to invoke constructor of a parent class

class Animal {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor({ name, age, runSpeed }) {
    super({ name, age });
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor({ name, age, swimSpeed }) {
    super({ name, age });
    this.swimSpeed = swimSpeed;
  }
}

const rabbit = new Rabbit({ name: "New Bunny", age: 1, runSpeed: "36 km/h" });
const fish = new Fish({ name: "Gold Fish", age: 2, swimSpeed: "80 km/h" });

console.log({ rabbit, fish });
