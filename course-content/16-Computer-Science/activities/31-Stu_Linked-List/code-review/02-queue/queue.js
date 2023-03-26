// Using pseudoclassical instantiation for Node constructor function
function Node(value, next=null){
  this.value = value;
  this.next = next;
}

// Using pseudoclassical instantiation for LinkedList constructor function
function Queue(){
  //each list will have a head node
  this.head = null;
  this.tail = null;

  this.length = 0;
}

Queue.prototype.dequeue = function() {
  if (!this.empty()) {
    let value = this.head.value;

    // POP the head off and have head point to the next
    // element in line
    this.head = this.head.next;
    this.length--;

    if (this.length <= 1) {
      // if there 'is' one elements left
      // then head should equal tail
      // if there are no elements left
      // then head will be null so tail should also be null
      this.tail = this.head;
    }

    return value;
  }

  return null;
}

Queue.prototype.enqueue = function(value){
  // create a new node and make the current head
  // the next element
  this.length++;
  if (!this.empty()) {
    let node = new Node(value);
    // attach a new node to the current tail
    this.tail.next = node;
    // make the attached node the new tail
    this.tail = node;
  }
  else {
    // if the queue is empty add a single node
    this.tail = new Node(value);
    // head should equal tail
    this.head = this.tail;
  }
}

Queue.prototype.peek = function() {
  // if not empty
  if (!this.empty()) {
    // return the value at the head of the line
    return this.head.value;
  }
  // else if empty return null
  return null;
}

Queue.prototype.empty = function() {
  return this.head === null;
}

//Test cases
var list = new Queue();

list.enqueue(10);
console.log(list.peek(), list.length); // 10 1

list.enqueue(5);
console.log(list.peek(), list.length); // 10 2

list.enqueue(15);
console.log(list.dequeue(), list.length); // 10 2
console.log(list.peek(), list.length); // 5 2

console.log(list.head) // Node { value: 5, next: ... }

list.enqueue(20);
list.enqueue(30);
list.enqueue(40);
list.enqueue(50);
list.enqueue(60);
list.enqueue(70);
list.enqueue(80);
list.enqueue(90);
list.enqueue(100);
list.enqueue(110);
list.enqueue(120);
list.enqueue(130);

console.log(list.peek(), list.dequeue(), list.length) // 5 5 13
