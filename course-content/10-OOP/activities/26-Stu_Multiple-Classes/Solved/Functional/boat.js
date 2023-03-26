// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Boat` class that extends the `Vehicle` class
function Boat(id, type, crew) {
  Vehicle.call(this, id, 0, "bwom");

  this.type = type;
  this.crew = crew;
}

/**
 * Extending the class
 */

/**
 * Object.setPrototypeOf 'mutates' and does not 'reassign' as with Object.create.
 * HOWEVER... it breaks optimizations in engines so is slower
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

//Object.setPrototypeOf(Boat.prototype,Vehicle.prototype); 

/**
 * OR
 * Object.create is fast but wipes out Boat constructor so is not recommended
 * we need to recreate it with second arg to initialize the constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

Boat.prototype = Object.create(Vehicle.prototype, {
  constructor: {
    value: Boat,
    enumerable: false,
    writable: true,
    configurable: true,
  },
}); 

Boat.prototype.useHorn = function () {
  console.log(this.sound)
};

Boat.prototype.crewSoundOff = function() {
  for (let i = 0; i < this.crew.length; ++i) {
    console.log(`${this.crew[i]} reporting for duty!`)
  }
};


const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
