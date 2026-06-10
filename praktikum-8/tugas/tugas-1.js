class HashMapLinearProbing {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
    this.DELETED = { tombstone: true };
  }
  _hash(key) {
    let total = 0;
    const keyStr = String(key);
    for (let i = 0; i < keyStr.length; i++) {
      total += keyStr.charCodeAt(i);
    }
    return total % this.capacity;
  }
  set(key, value) {
    if (this.size / this.capacity > 0.7) {
      this._resize();
    }
    let index = this._hash(key);
    let startSub = index;
    while (this.table[index] !== null && this.table[index] !== this.DELETED) {
      if (this.table[index].key === key) {
        this.table[index].value = value;
        return;
      }
      index = (index + 1) % this.capacity;
      if (index === startSub) break;
    }
    this.table[index] = { key, value };
    this.size++;
  }
  get(key) {
    let index = this._hash(key);
    let startSub = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + 1) % this.capacity;
      if (index === startSub) break;
    }
    return undefined; 
  }
  delete(key) {
    let index = this._hash(key);
    let startSub = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        this.table[index] = this.DELETED; 
        this.size--;
        return true;
      }
      index = (index + 1) % this.capacity;
      if (index === startSub) break;
    }
    return false; 
  }
  _resize() {
    console.log(
      `\n[RESIZE] Load factor melebihi 0.7. Mengubah kapasitas: ${this.capacity} -> ${this.capacity * 2}`,
    );

    const oldTable = this.table;
    this.capacity = this.capacity * 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0; // Reset size karena akan dihitung ulang lewat fungsi set()

    for (const entry of oldTable) {
      // Rehash elemen yang valid saja (bukan null atau tombstone)
      if (entry !== null && entry !== this.DELETED) {
        this.set(entry.key, entry.value);
      }
    }
  }
  printTable() {
    console.log(
      `Kapasitas saat ini: ${this.capacity} | Jumlah Data: ${this.size}`,
    );
    const display = this.table.map((item, idx) => {
      if (item === null) return `[${idx}]: null`;
      if (item === this.DELETED) return `[${idx}]: <TOMBSTONE>`;
      return `[${idx}]: { ${item.key}: ${item.value} }`;
    });
    console.log(display.join("\n"));
  }
}
const myHash = new HashMapLinearProbing(5); 

console.log("=== 1. Mengisi Data ===");
myHash.set("nama", "Adilla");
myHash.set("nim", "2026123");
myHash.set("prodi", "Informatics");
myHash.printTable();

console.log("\n=== 2. Pengujian Delete (Tombstone) ===");
myHash.delete("nim");
myHash.printTable(); 

console.log("\n=== 3. Mencari Data Setelah Delete ===");
console.log("Cari 'prodi':", myHash.get("prodi")); 

console.log("\n=== 4. Memicu Auto-Resize ===");
myHash.set("matkul", "Struktur Data");
myHash.set("kelas", "TI-2A");
myHash.printTable(); 
