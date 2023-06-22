// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index <= 0) {
      this.prepend(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const newNode = {
        value: value,
        next: current.next,
      };
      current.next = newNode;
    }
  }

  remove(index) {
    if (index === this.length) {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = null;
      this.length--;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.value = current.next.value;
      current.next = current.next.next;
    }
  }

  printList() {
    w;
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.printList();
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(4);
myLinkedList.printList();
