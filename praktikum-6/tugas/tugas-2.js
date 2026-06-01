class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function buatLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}
function cetakLL(head) {
  if (!head) return "[List Kosong]";
  let result = [];
  let current = head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(" → ");
}
function palindromLL(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  let kiri = 0;
  let kanan = arr.length - 1;
  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) return false;
    kiri++;
    kanan--;
  }
  return true;
}
function hapusNDariAkhir(head, n) {
  let dummy = new Node(0);
  dummy.next = head;
  let cepat = dummy;
  let lambat = dummy;
  for (let i = 0; i <= n; i++) {
    cepat = cepat.next;
  }
  while (cepat !== null) {
    cepat = cepat.next;
    lambat = lambat.next;
  }
  lambat.next = lambat.next.next;
  return dummy.next;
}
function tengahLinkedList(head) {
  let lambat = head;
  let cepat = head;
  while (cepat !== null && cepat.next !== null) {
    lambat = lambat.next;
    cepat = cepat.next.next;
  }
  return lambat; 
}
console.log("=========================================");
console.log("UJIAN 1: palindromLL(head)");
console.log("=========================================");
let headP1 = buatLinkedList([1, 2, 3, 2, 1]);
console.log(`List: ${cetakLL(headP1)} -> Hasil: ${palindromLL(headP1)}`);
let headP3 = buatLinkedList([1, 2, 3, 4]);
console.log(`List: ${cetakLL(headP3)} -> Hasil: ${palindromLL(headP3)}`);

console.log("\n=========================================");
console.log("UJIAN 2: hapusNDariAkhir(head, n)");
console.log("=========================================");
let headH1 = buatLinkedList([1, 2, 3, 4, 5]);
console.log(`Sebelum: ${cetakLL(headH1)} (n=2)`);
headH1 = hapusNDariAkhir(headH1, 2);
console.log(`Sesudah: ${cetakLL(headH1)}`);

console.log("\n=========================================");
console.log("UJIAN 3: tengahLinkedList(head)");
console.log("=========================================");
let headT1 = buatLinkedList([1, 2, 3, 4, 5]);
let tengah1 = tengahLinkedList(headT1);
console.log(`List: ${cetakLL(headT1)} -> Tengah: [${tengah1 ? tengah1.data : null}]`);