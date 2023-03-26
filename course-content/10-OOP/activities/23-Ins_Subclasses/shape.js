const Blob = require('./blob');

class Shape extends Blob{
  constructor(area, perimeter) {
    // super();
    this.area = area;
    super();
    this.perimeter = perimeter;
    this.example = "I am in the Shape";
  }

  printInfo() {
    // console.log(`Area: ${this.area}`);
    // console.log(`Perimeter: ${this.perimeter}`);
    for (const key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

const shape = new Shape(10, 10);
console.log("****new Shape******");
shape.printInfo();
shape.printScream();
module.exports = Shape;

// class mammal {
//   constructor() {
//     this.hair = true;
//     this.warmBlooded = true;
//     this.cute = true;
//   }

// }