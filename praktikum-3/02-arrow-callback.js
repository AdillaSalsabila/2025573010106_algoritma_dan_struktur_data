function kuadratBiasa(x){
    return x * x;
}

const kuadrat = (x) =>{
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== Perbandingan Penulisan===');
console.log('Biasa   :', kuadratBiasa(5));
console.log('Arroww  :', kuadrat(5));
console.log('Ringkas  :', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => 'selamat ${waktu}, ${nama}!';

console.log('Luas 4x6 :', luas(4, 6));
console.log(salam('Budi', 'Pagi'));

function lakukanOperasi(angka, operasiCallback){
    console.log('Angka awal: ${angka}');
    const hasil = operasiCallback(angka);
    console.log('Hasil setelah operasi : ${hasil}');
}

console.log('\n=== Callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x){

    return x / 2;
});

console.log('');
console.log('== latihan2 ==');

console.log('\n=== setTimeout (Callback');
console.log('pesan 1: sebelum timer');

setTimeout(() => {
    console.log('pesan 3: ini dari dalam settimeout (setelah 1 detik)');
}, 1000);
console.log('pesan 2: setelah mendaftarkan timer');

const keHurufBesar = (str) => str.toUpperCase();
const tambahSeru = (str) => str + "!!!";
const hitungKata = (str) => str.split(' ').length;

function prosesKalimat(kalimat, transformasiCallback) {
    const hasil = transformasiCallback(kalimat);
    console.log("Hasil transformasi:", hasil);
}
const kalimatUji = 'belajar javascript itu menyenangkan';

console.log("--- Menguji keHurufBesar ---");
prosesKalimat(kalimatUji, keHurufBesar);

console.log("\n--- Menguji tambahSeru ---");
prosesKalimat(kalimatUji, tambahSeru);

console.log("\n--- Menguji hitungKata ---");
prosesKalimat(kalimatUji, hitungKata);



