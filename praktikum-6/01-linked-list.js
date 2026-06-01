class Node {
  constructor(data) {
    this.data = data;       
    this.next = null;       
  }
}
class LinkedList {
  constructor() {
    this.head = null;       
    this.size = 0;          
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next; 
      current.next = newNode;
    }
    this.size++;
  }
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head; 
    this.head = newNode;      
    this.size++;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(' Index di luar batas!'); return;
    }
    if (index === 0) { this.prepend(data); return; }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next; 
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  print() {
    if (!this.head) { console.log(' [List kosong]'); return; }
    let result = '';
    let current = this.head;
    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
      current = current.next;
    }
    console.log(' ', result, ` (size: ${this.size})`);
  }
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next; 
      current.next = prev;       
      prev = current;            
      current = next;            
    }
    this.head = prev;            
  }
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) { arr.push(current.data); current = current.next; }
    return arr;
  }
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }
  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(' Index di luar batas!');
      return null;
    }

    let deletedData;
    if (index === 0) {
      deletedData = this.head.data;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      deletedData = current.next.data;
      current.next = current.next.next;
    }
    this.size--;
    return deletedData;
  }
  indexOf(data) {
    return this.search(data);
  }
  isEmpty() {
    return this.size === 0;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
} 
const ll = new LinkedList();

console.log('=== Append ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();

console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();

console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();

console.log('\n=== Search ===');
console.log(' Indeks nilai 20:', ll.search(20));
console.log(' Indeks nilai 99:', ll.search(99));

console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();


console.log('');
console.log('== latihan1 ==');

ll.reverse();
console.log('Data mula-mula untuk Latihan 1:');
ll.print(); 
console.log('\n Apakah list kosong?', ll.isEmpty()); 

// 2. Uji getAt(index)
console.log('\n--- Uji getAt(index) ---');
console.log(' Data di indeks 0:', ll.getAt(0));   
console.log(' Data di indeks 2:', ll.getAt(2));   
console.log(' Data di indeks 10 (tidak valid):', ll.getAt(10)); 

// 3. Uji indexOf(data)
console.log('\n--- Uji indexOf(data) ---');
console.log(' Indeks dari data nilai 30:', ll.indexOf(30)); 
console.log(' Indeks dari data nilai 100:', ll.indexOf(100)); 

// 4. Uji deleteAt(index)
console.log('\n--- Uji deleteAt(index) ---');
console.log(' Menghapus node pada indeks 2...');
const dataDihapus = ll.deleteAt(2);
console.log(` Data yang berhasil dihapus: ${dataDihapus}`);
ll.print(); 

// 5. Uji clear()
console.log('\n--- Uji clear() ---');
console.log(' Mengosongkan seluruh isi linked list...');
ll.clear();
ll.print(); 
console.log(' Apakah list kosong sekarang?', ll.isEmpty()); 
