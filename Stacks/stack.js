// This represents out stack data structure implementation


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // Adds new element to the stack
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length-1];
  }
}

module.exports = Stack;
