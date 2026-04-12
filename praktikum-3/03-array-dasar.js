const mahasiswa = ['dilla', 'Sitiaminah', 'Ahmadadi', 'yalala'];
const nilai = [85, 92, 78, 95, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]); 
console.log('Elemen ketiga :', mahasiswa[2]); 
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

mahasiswa[1] = 'Sitiaminah'; 
console.log('\nSetelah diubah:', mahasiswa);

console.log('\n=== Manipulasi Array ===');
mahasiswa.push('Doni'); 
console.log('Setelah push :', mahasiswa);
mahasiswa.unshift('Ahmadadi'); 
console.log('Setelah unshift :', mahasiswa);
const dihapusAkhir = mahasiswa.pop(); 
console.log('Dihapus (pop) :', dihapusAkhir);
console.log('Setelah pop :', mahasiswa);
const dihapusAwal = mahasiswa.shift(); 
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift :', mahasiswa);

console.log('\n=== Pencarian ===');
console.log('Indeks dilla :', mahasiswa.indexOf('dilla'));
console.log('Ada yalala? :', mahasiswa.includes('yalala'));
console.log('Ada siti? :', mahasiswa.includes('siti'));

const sebagian = nilai.slice(1, 4); 
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

console.log('');
console.log('== latihan3 ==');

let daftarBelanja = ['Beras', 'Gula', 'Minyak Goreng', 'Telur', 'Kopi'];
console.log("--- Daftar Belanja Awal ---");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

daftarBelanja.push('Susu', 'Sabun');
console.log("\n(Menambahkan Susu dan Sabun ke daftar...)");

let itemDihapus = daftarBelanja.shift();
console.log(`\nItem yang dihapus dari antrean pertama: ${itemDihapus}`);

let adaSusu = daftarBelanja.includes('Susu');
console.log("\nCek Ketersediaan:");
if (adaSusu) {
    console.log("Status: 'Susu' sudah masuk dalam daftar belanja.");
} else {
    console.log("Status: 'Susu' belum ada di daftar.");
}
console.log(`\nJumlah total item belanja sekarang: ${daftarBelanja.length} item.`);
console.log("Daftar Akhir:", daftarBelanja);




