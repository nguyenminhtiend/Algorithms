const addTwoNumbers = function (l1, l2) {
  let extra = 0;
  const arr = [];
  while (l1 !== null || l2 !== null) {
    let value = extra;
    if (l1) {
      value += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      value += l2.val;
      l2 = l2.next;
    }
    if (value > 9) {
      value -= 10;
      extra = 1;
    } else {
      extra = 0;
    }

    arr.push(value);
  }
  if (extra > 0) {
    arr.push(extra);
  }
  let node = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    const listNode = new ListNode(arr[i]);
    if (node === null) {
      node = listNode;
      node.next = null;
    } else {
      listNode.next = node;
      node = listNode;
    }
  }
  let current = node;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  return node;
};

const l1 = new LinkedList([9, 9, 9, 9, 9, 9, 9]);
const l2 = new LinkedList([9, 9, 9, 9]);

addTwoNumbers(l1.head, l2.head);
