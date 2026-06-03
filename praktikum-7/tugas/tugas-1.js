class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.size--;
        return removedNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }
    peek() {
        return this.isEmpty() ? null : this.head.data;
    }
    toArray() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}
class Pasien {
    constructor(id, nama, prioritas) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; 
        this.waktuDaftar = new Date().toLocaleTimeString('id-ID'); 
    }
}
class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }
    daftar(pasien) {
        if (pasien.prioritas === 'darurat') {
            this.antrianDarurat.enqueue(pasien);
            console.log(`[DAFTAR] Pasien DARURAT masuk: ${pasien.nama} (ID: ${pasien.id})`);
        } else if (pasien.prioritas === 'biasa') {
            this.antrianBiasa.enqueue(pasien);
            console.log(`[DAFTAR] Pasien Biasa masuk: ${pasien.nama} (ID: ${pasien.id})`);
        } else {
            console.log(`[ERROR] Prioritas pasien tidak valid!`);
        }
    }
    layani() {
        let pasienDilayani = null;

        if (!this.antrianDarurat.isEmpty()) {
            pasienDilayani = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasienDilayani = this.antrianBiasa.dequeue();
        }
        if (pasienDilayani) {
            console.log(`\n==================================================`);
            console.log(`>> MELAYANI PASIEN <<`);
            console.log(`ID         : ${pasienDilayani.id}`);
            console.log(`Nama       : ${pasienDilayani.nama}`);
            console.log(`Prioritas  : ${pasienDilayani.prioritas.toUpperCase()}`);
            console.log(`Jam Daftar : ${pasienDilayani.waktuDaftar}`);
            console.log(`==================================================`);
        } else {
            console.log(`\n[INFO] Semua antrian kosong. Tidak ada pasien yang dilayani.`);
        }
    }
    tampilkanAntrian() {
        console.log(`\n--------- STATUS ANTRIAN SAAT INI ---------`);
    
        const daruratArr = this.antrianDarurat.toArray();
        console.log(`[Antrian Darurat] (${daruratArr.length} pasien):`);
        if (daruratArr.length === 0) console.log(`  (Kosong)`);
        daruratArr.forEach((p, index) => {
            console.log(`  ${index + 1}. [${p.id}] ${p.nama}`);
        });

        // Cetak Antrian Biasa
        const biasaArr = this.antrianBiasa.toArray();
        console.log(`[Antrian Biasa] (${biasaArr.length} pasien):`);
        if  (biasaArr.length === 0) console.log(`  (Kosong)`);
        biasaArr.forEach((p, index) => {
            console.log(`  ${index + 1}. [${p.id}] ${p.nama}`);
        });
        console.log(`-------------------------------------------\n`);
    }
}
const rsMedika = new AntrianRS();

const daftarNama = ["Siti", "Ahmad", "Budi", "Dewi", "Eko", "Rini", "Fajar", "Gita", "Hadi", "Indah"];
const opsiPrioritas = ["darurat", "biasa"];

console.log("=== MEMULAI SIMULASI PENDAFTARAN 10 PASIEN SECARA ACAK ===");

for (let i = 1; i <= 10; i++) {
    const namaAcak = daftarNama[i - 1];
    const prioritasAcak = opsiPrioritas[Math.floor(Math.random() * opsiPrioritas.length)];
    const idPasien = `PSN-${String(i).padStart(3, '0')}`; 

    const pasienBaru = new Pasien(idPasien, namaAcak, prioritasAcak);
    rsMedika.daftar(pasienBaru);
}

rsMedika.tampilkanAntrian();

console.log("=== PROSES PELAYANAN SATU PER SATU ===");

for (let i = 1; i <= 10; i++) {
    rsMedika.layani();
     
    if (i % 3 === 0 || i === 10) {
        rsMedika.tampilkanAntrian();
    }
}