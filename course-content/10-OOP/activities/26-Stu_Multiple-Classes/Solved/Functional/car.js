// TODO: Import the parent class

const Vehicle = require("./vehicle");

// TODO: Create a `Car` class that extends the `Vehicle` class
function Car(id, color, passengers) {
  Vehicle.call(this, id, 4, "beep");

  this.color = color;
  this.passengers = passengers;
}

/**
 * Object.setPrototypeOf 'mutates' and does not 'reassign' as with Object.create.
 * HOWEVER... it breaks optimizations in engines so is slower
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

//Object.setPrototypeOf(Car.prototype,Vehicle.prototype); 

/**
 * OR
 * Object.create is fast but wipes out Boat constructor so is not recommended
 * we need to recreate it with second arg to initialize the constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

Car.prototype = Object.create(Vehicle.prototype, {
  constructor: {
    value: Car,
    enumerable: false,
    writable: true,
    configurable: true,
  },
}); 


Car.prototype.useHorn = function () {
  console.log(this.sound)
};

Car.prototype.checkPassengers = function() {
  if (this.passengers.length > 4) {
    console.log("This car only seats 4 people. You have too many passengers!");
  }
  else {
    console.log(`This car can seat ${4-this.passengers.length} more people.`);
  }
};

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
