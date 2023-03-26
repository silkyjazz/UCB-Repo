module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => a / b,
};

// module.exports.sum = (a, b) => a + b;
// module.exports.difference = (a, b) => a - b;
// module.exports.product =  (a, b) => a * b;
// module.exports. quotient = (a, b) => a / b;


// const sum = (a, b) => a + b;
// const difference = (a, b) => a - b;
// const product =  (a, b) => a * b;
// const  quotient = (a, b) => a / b;

// module.exports = {
//   sum: sum,
//   difference: difference,
//   product: product,
//   quotient: quotient,
// };

// =============

//by it self will not export module - need property 
exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => a / b,
};

// exports.myMaths = {
//   sum: (a, b) => a + b,
//   difference: (a, b) => a - b,
//   product: (a, b) => a * b,
//   quotient: (a, b) => a / b,
// };



// maths.myMaths.sum(numOne, numTwo)