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
