class ListNode {
  constructor(val) {
    this.val = val;
  }
}

class LinkedList {
  constructor(arr) {
    this.head = null;
    if (arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        this.addNode(arr[i]);
      }
    }
  }

  addNode(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

var reverseList = function (head) {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
};

// linkedList.reverse();

// linkedList.traverse();
//linkedList.traverse();