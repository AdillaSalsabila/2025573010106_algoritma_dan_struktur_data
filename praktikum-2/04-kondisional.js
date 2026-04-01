let nilaiUjian =78;

console.log('=== konversi Grade ===');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
    console.log('Grade : A (sangat baik)');
} else if (nilaiUjian >=80) {
    console.log('Grade : B (Baik)');
}if (nilaiUjian >= 70) {
    console.log('Grade : c (cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade : D (kurang)');
} else {
    console.log('Grade : E (tidak lulus)');
}

let namaHari = 'Rabu';

console.log('\n=== Cek Jenis Hari ===');
switch (namaHari) {
    case 'Senin':
    case 'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
console.log(`${namaHari} adalah hari kerja.`);
break;
     case 'Sabtu':
    case 'Minggu':
console.log(`${namaHari} adalah akhir pekan.`);
break;
default:
console.log('Nama hari tidak dikenali.');
}

let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';
console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`); 



console.log("");
console.log('== latihan 2 ==');

const bulan = 7; 


console.log('\n=== Konverter Musim ===');
let musim;

if (bulan === 12 || bulan === 1 || bulan === 2) {
    musim = 'Dingin';
} else if (bulan >= 3 && bulan <= 5) {
    musim = 'Semi';
} else if (bulan >= 6 && bulan <= 8) {
    musim = 'Panas';
} else if (bulan >= 9 && bulan <= 11) {
    musim = 'Gugur';
} else {
    musim = 'Bulan tidak valid';
}

console.log(`Bulan ${bulan} adalah musim ${musim}`);

const adaAwan = true;
const adaAngin = false;

console.log('=== Status Cuaca ===');

console.log(`Apakah cuaca mendung sekaligus berangin? ${adaAwan && adaAngin}`);

console.log(`Apakah ada awan atau angin? ${adaAwan || adaAngin}`);

console.log(`Apakah langit cerah (tidak ada awan)? ${!adaAwan}`);