class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(" Index di luar batas!");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    let previousNode = current.prev;
    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = current;
    current.prev = newNode;

    this.size++;
  }
  delete(data) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return true;
      }
      current = current.next;
    }

    return false;
  }
  reverse() {
    if (!this.head) return;
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
  print() {
    if (!this.head) {
      console.log(" [List kosong]");
      return;
    }

    let forwardResult = "";
    let currentForward = this.head;
    while (currentForward) {
      forwardResult += currentForward.next
        ? `[${currentForward.data}] ⇄ `
        : `[${currentForward.data}]`;
      currentForward = currentForward.next;
    }
    console.log(" Dari Depan (Head) :", forwardResult);
    let backwardResult = "";
    let currentBackward = this.tail;
    while (currentBackward) {
      backwardResult += currentBackward.prev
        ? `[${currentBackward.data}] ⇄ `
        : `[${currentBackward.data}]`;
      currentBackward = currentBackward.prev;
    }
    console.log(
      " Dari Belakang (Tail):",
      backwardResult,
      ` (size: ${this.size})`,
    );
  }
}
console.log("=== Pembuktian & Pengujian Doubly Linked List ===");
const dll = new DoublyLinkedList();

console.log("\n1. Pengujian append() [Ekspektasi Big O: O(1)]");
dll.append(10);
dll.append(20);
dll.append(30);
dll.print();

console.log("\n2. Pengujian prepend()");
dll.prepend(5);
dll.print();

console.log("\n3. Pengujian insertAt() di indeks 2 (menyisipkan nilai 15)");
dll.insertAt(15, 2);
dll.print();
console.log("\n4. Pengujian delete() nilai 20");
dll.delete(20);
dll.print();

console.log("\n5. Pengujian reverse() (Membalikkan urutan)");
dll.reverse();
dll.print();
