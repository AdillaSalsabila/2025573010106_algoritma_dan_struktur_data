   const mahasiswa = {
nama : 'Budi Santoso',
umur : 20,
jurusan : 'Teknik Informatika',
ipk : 3.75,
aktif : true,
};

console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']); 

const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]); 
mahasiswa.email = 'budi@email.com'; 
mahasiswa.umur = 21; 
console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
nama : 'Dr. Ahmad Fauzi',
mataKuliah : 'Struktur Data',
pengalaman : 10, 

perkenalan() {

return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
},
statusSenior() {
if (this.pengalaman >= 10) {
return `${this.nama} adalah dosen senior.`;
}
return `${this.nama} adalah dosen junior.`;
}
};
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());

console.log(dosen.statusSenior());
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
if (typeof dosen[key] !== 'function') { 
console.log(` ${key}: ${dosen[key]}`);
}
}
console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

// 01-object-literal.js
const buku = {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 85000,
    tersedia: true,
    
    info: function() {
        return `Buku: ${this.judul} | Pengarang: ${this.pengarang} (${this.tahunTerbit}) | Status: ${this.tersedia ? 'Tersedia' : 'Kosong'}`;
    },
    diskon: function(persen) {
        return this.harga * (1 - persen / 100);
    }
};

const koleksiBuku = [
    {
        judul: "Negeri 5 Menara",
        pengarang: "A. Fuadi",
        tahunTerbit: 2009,
        harga: 95000,
        tersedia: true,
        info: function() { return `${this.judul} - ${this.pengarang}`; }
    },
    {
        judul: "Bumi",
        pengarang: "Tere Liye",
        tahunTerbit: 2014,
        harga: 105000,
        tersedia: false,
        info: function() { return `${this.judul} - ${this.pengarang}`; }
    },
    {
        judul: "Filosofi Teras",
        pengarang: "Henry Manampiring",
        tahunTerbit: 2018,
        harga: 98000,
        tersedia: true,
        info: function() { return `${this.judul} - ${this.pengarang}`; }
    }
];

console.log("--- Daftar Semua Buku ---");
koleksiBuku.forEach((b) => {
    console.log(b.info());
});
console.log("\n--- Buku yang Tersedia ---");
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

bukuTersedia.forEach(b => console.log(`- ${b.judul} (Tersedia)`));

console.log("\n--- Uji Coba Method Diskon ---");
console.log(`Harga asli ${buku.judul}: Rp${buku.harga}`);
console.log(`Harga setelah diskon 20%: Rp${buku.diskon(20)}`);