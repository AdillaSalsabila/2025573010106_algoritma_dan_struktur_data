function fungsiA(n) {
  return n * 2;
}

function fungsiB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}
function fungsiC(n) {
  for (let i = 1; i < n; i *= 2) {}
}
function fungsiD(n) {
  const arr = Array.from({ length: n }, (_, i) => i);

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {});
    });
  });
}
function hitungKompleksitas(n, fn, namaFungsi) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`Waktu eksekusi ${namaFungsi} (n=${n}): ${end - start} ms`);
}
const n = 1000;

console.log("--- Pengukuran Waktu Eksekusi ---");
hitungKompleksitas(n, fungsiA, "Fungsi A [O(1)]");
hitungKompleksitas(n, fungsiB, "Fungsi B [O(n^2)]");
hitungKompleksitas(n, fungsiC, "Fungsi C [O(log n)]");
hitungKompleksitas(n, fungsiD, "Fungsi D [O(n^3)]");
