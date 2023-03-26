// // TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = 'Unit 17 - Computer Science';
    this.description = 'CS for JS';
  }
  information() {
    console.log(this.title, this.description);
  }
}

// class Lesson {
//   constructor(title,description ) {
//     this.title = title;
//     this.description = description;
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// Pass the state into our action function.
const getInformation = (state) => ({
  // Log the title an description
  information: () => console.log(state.title, state.description),
  meow: () => console.log("Meow, Meow")
});

// const getInformation = (state) => ({
//   // Log the title an description
//   information: function() { 
//     return console.log(state.title, state.description)
//   }
// });

// const getInformation = function(state){
//   return {
//   // Log the title an description
//   information: function() { 
//     return console.log(state.title, state.description)
//   }
// }};

// Create a function.
const lesson = function (title,description) {
  // Store the locally scoped variables.
  const state = {
    title: title,
    description: description,
  };

  // Return an inner function named 'getInformation' passing the state as an argument.
  return { ...getInformation(state) };
  // return { information: () => console.log(state.title, state.description) };
};


// const workOut = function (title,description) {
//   // Store the locally scoped variables.
//   const state = {
//     title: title,
//     description: description,
//   };

//   // Return an inner function named 'getInformation' passing the state as an argument.
//   return { ...getInformation(state) };
//   // return { information: () => console.log(state.title, state.description) };
// };

const csForJS = lesson("Unit 17....", 'CS for JS');
csForJS.information();
csForJS.meow();



const counter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};





const myCounter = counter();

myCounter.increment();
console.log(myCounter.value());
console.log(myCounter);

