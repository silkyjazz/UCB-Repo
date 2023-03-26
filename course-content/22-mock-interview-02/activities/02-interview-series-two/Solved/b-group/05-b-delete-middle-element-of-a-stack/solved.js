/**
 * Stack
 * @constructor
 */
function Stack(){
  this.data = [];

  /**
   * push
   * 
   * places the data element (datum) on top of the stack
   * 
   * @param {datum} datum - data element to push onto stack 
   */
  this.push = function(record) {
    this.data[this.data.length] = record;
  }

  /**
   * pop
   * 
   * retrieves and removes the data element from the top of
   * the stack.
   * 
   * @returns {any}
   */
  this.pop = function() {
   let record = this.data[this.data.length-1];
   --this.data.length;
   return record;
  }

  /**
   * empty
   * 
   * checks if the stack is empty
   * 
   * @returns {boolean} is the stack empty?
   */
  this.empty = function() {
    return this.data.length === 0;
  }
}


// SOLVE!:

// A solve using two stacks, variables, conditionals and loops
let stack = new Stack();
let temp = new Stack();

// setup stack
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// create a count of all the elements of the stack
// while storing all the elements in another stack
// NOTE: the temp stack will have all the elements in 
//  reverse order!!!
for(var count = 0;!stack.empty(); ++count) {
  temp.push(stack.pop());
}

// calculate the middle of the stack
let middle = Math.floor(count/2);

// take all the elements in the temporary stack and
// put them back (reversing them once again) so they are
// in the correct order BUT exclude the middle value.
for (let i = 0; !temp.empty(); ++i) {
  let value = temp.pop();
  if (i !== middle) {
    stack.push(value);
  }
}

console.log(stack); // voila!!!

