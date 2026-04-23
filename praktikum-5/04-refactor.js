function adaDuplikatLambat(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] === arr[j]) return true;
  return false;
}
function adaDuplikatCepat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
function frekuensiLambat(arr) {
  const unik = [];
  const hitung = [];
  for (const x of arr) {
    const idx = unik.indexOf(x); // O(n) di dalam loop O(n)
    if (idx === -1) {
      unik.push(x);
      hitung.push(1);
    } else hitung[idx]++;
  }
  return Object.fromEntries(unik.map((u, i) => [u, hitung[i]]));
}
function frekuensiCepat(arr) {
  const counter = {};
  for (const x of arr) counter[x] = (counter[x] || 0) + 1;
  return counter;
}
const besar = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 1000),
);
let t = Date.now();
adaDuplikatLambat(besar);
console.log("Duplikat LAMBAT O(n2):", Date.now() - t, "ms");
t = Date.now();
adaDuplikatCepat(besar);
console.log("Duplikat CEPAT O(n) :", Date.now() - t, "ms");
const kata = ["a", "b", "a", "c", "b", "a", "d"];
console.log("\nFrekuensi:", frekuensiCepat(kata));

/**
 * Latihan 3: Analisis Time & Space Complexity
 */

// 2a. cariPasanganLambat (Nested Loop)
// Time Complexity: O(n^2) - Karena ada loop di dalam loop.
// Space Complexity: O(1) - Hanya menggunakan sedikit variabel tambahan, tidak peduli ukuran array.
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

// 2b. cariPasanganCepat (Menggunakan Set)
// Time Complexity: O(n) - Karena hanya melakukan satu kali iterasi pada array.
// Space Complexity: O(n) - Dalam kasus terburuk, kita menyimpan hampir semua elemen array ke dalam Set.
function cariPasanganCepat(arr, target) {
    const seen = new Set();
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null;
}
 console.log('');
    console.log ('== latihan 2==');
 
// 3. Uji fungsi dengan data [2, 7, 11, 15] dan target 9
const testArray = [2, 7, 11, 15];
const target = 9;

console.log("Hasil Uji Sederhana:");
console.log("Lambat:", cariPasanganLambat(testArray, target)); // [2, 7]
console.log("Cepat:", cariPasanganCepat(testArray, target));   // [2, 7]

const besarArray = 50000;
const dataAcak = Array.from({ length: besarArray }, () => Math.floor(Math.random() * 100000));
const targetSulit = -1; 

console.log("\n--- Pengukuran Waktu (50.000 data) ---");

const startLambat = Date.now();
cariPasanganLambat(dataAcak, targetSulit);
const endLambat = Date.now();
console.log(`Waktu cariPasanganLambat: ${endLambat - startLambat} ms`);

const startCepat = Date.now();
cariPasanganCepat(dataAcak, targetSulit);
const endCepat = Date.now();
console.log(`Waktu cariPasanganCepat: ${endCepat - startCepat} ms`);
