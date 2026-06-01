class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (this.head !== null) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }
  deleteHead() {
    if (!this.head) return null;

    const deletedData = this.head.data;
    this.head = this.head.next;
    this.length--;
    return deletedData;
  }
  getHead() {
    return this.head ? this.head.data : null;
  }
}
class Stack {
  constructor() {
    this.storage = new LinkedList();
  }
  push(data) {
    this.storage.prepend(data);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack Kosong";
    }
    return this.storage.deleteHead();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack Kosong";
    }
    return this.storage.getHead();
  }
  isEmpty() {
    return this.storage.length === 0;
  }
  size() {
    return this.storage.length;
  }
  print() {
    if (this.isEmpty()) {
      console.log("(Stack Kosong)");
      return;
    }

    let current = this.storage.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const undoStack = new Stack();
const redoStack = new Stack(); 
const daftarAksi = [
  "Ketik kata pertama: 'Halo'",
  "Ketik kata kedua: 'Dunia'",
  "Format teks: 'Bold'",
  "Tambah gambar: 'logo.png'",
];

console.log("=== MEMULAI AKSI (PUSH KE STACK) ===");
daftarAksi.forEach((aksi) => {
  console.log(`Melakukan aksi: [ ${aksi} ]`);
  undoStack.push(aksi);
});

console.log("\nStatus Stack Saat Ini (Top ke Bottom):");
undoStack.print();
console.log(`Ukuran Stack: ${undoStack.size()}\n`);

console.log("=== SIMULASI UNDO BEBERAPA KALI (POP) ===");

let undo1 = undoStack.pop();
console.log(`[Undo dijalankan] -> Membatalkan: "${undo1}"`);
redoStack.push(undo1); 

let undo2 = undoStack.pop();
console.log(`[Undo dijalankan] -> Membatalkan: "${undo2}"`);
redoStack.push(undo2);

console.log("\nStatus Stack Setelah 2x Undo:");
undoStack.print();
console.log(`Elemen teratas saat ini (Peek): ${undoStack.peek()}`);
console.log(`Ukuran Stack Sekarang: ${undoStack.size()}\n`);

console.log("=== SIMULASI REDO (MENGEMBALIKAN AKSI) ===");
if (!redoStack.isEmpty()) {
  let redoAksi = redoStack.pop();
  undoStack.push(redoAksi);
  console.log(`[Redo dijalankan] -> Mengembalikan: "${redoAksi}"`);
}

console.log("\nStatus Akhir Stack:");
undoStack.print();