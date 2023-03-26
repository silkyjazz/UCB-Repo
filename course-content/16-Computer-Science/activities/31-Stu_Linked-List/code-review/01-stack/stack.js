// Using pseudoclassical instantiation for Node constructor function
function Node(value, next=null){
  this.value = value;
  this.next = next;
}

// Using pseudoclassical instantiation for LinkedList constructor function
function Stack(){
  //each list will have a head node
  this.head = null;
  this.length = 0;
}

Stack.prototype.pop = function() {
  if (!this.empty()) {
    let value = this.head.value;

    // POP the head off and have head point to the next
    // element in line
    this.head = this.head.next;
    this.length--;

    return value;
  }

  return null;
}

Stack.prototype.push = function(value){
  // create a new node and make the current head
  // the next element
  this.length++;
  this.head = new Node(value,this.head);
}

Stack.prototype.peek = function() {
  if (!this.empty()) {
    return this.head.value;
  }
  return null;
}

Stack.prototype.empty = function(){
  return this.head === null;
}



//Test cases
var list = new Stack();

// console.log(list.insert(1)); 
// console.log(list.printHeadTail()); 

list.push(10);
console.log(list.peek(), list.length); // 10 1

list.push(5);
console.log(list.peek(), list.length); // 5 2

list.push(15);
console.log(list.peek(), list.length); // 15 3

list.pop(); // 15 
console.log(list.peek(), list.length); // 5 2

console.log(list.head) // Node { value: 5, next: ... }

list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.push(100);
list.push(110);
list.push(120);
list.push(130);

console.log(list.peek(), list.length) // 130 14
