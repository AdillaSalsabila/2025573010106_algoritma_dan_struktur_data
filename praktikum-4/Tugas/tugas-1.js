class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        return `[ID: ${this.id}] ${this.nama} - Harga: Rp${this.harga.toLocaleString()} (Stok: ${this.stok})`;
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (this.stok >= jumlah) {
            this.stok -= jumlah;
            console.log(`Berhasil menjual ${jumlah} unit ${this.nama}.`);
        } else {
            console.log(`Gagal menjual! Stok ${this.nama} tidak mencukupi.`);
        }
    }
}
class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }
    info() {
        return `${super.info()} | Digital: ${this.ukuranFile}MB, Format: ${this.formatFile}`;
    }

    download() {
        console.log(`Mengunduh ${this.nama}... File siap dalam format ${this.formatFile}.`);
    }
    jual(jumlah) {
        console.log(`Lisensi ${this.nama} terjual sebanyak ${jumlah}.`);
    }
}
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }
    info() {
        return `${super.info()} | Berat: ${this.beratGram}g, Dimensi: ${this.dimensi}`;
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        const totalOngkir = beratKg * tarifPerKg;
        return totalOngkir;
    }
}
const daftarProduk = [
    new ProdukDigital(1, "E-Book JS Expert", 150000, 999, 15, "PDF"),
    new ProdukDigital(2, "Asset Game 3D", 500000, 999, 1200, "ZIP"),
    new ProdukFisik(3, "Keyboard Mechanical", 850000, 10, 1200, "35x15x4cm"),
    new ProdukFisik(4, "Mouse Gaming", 400000, 0, 150, "12x6x4cm")
];
console.log("--- (a) Semua Info Produk ---");
daftarProduk.forEach(produk => {
    console.log(produk.info());
});

console.log("\n--- (b) Produk yang Tersedia ---");
const produkTersedia = daftarProduk.filter(produk => produk.tersedia());
produkTersedia.forEach(p => console.log(`Tersedia: ${p.nama}`));

console.log("\n--- (c) Array Nama Produk Saja ---");
const namaSaja = daftarProduk.map(produk => produk.nama);
console.log(namaSaja);

console.log("\n--- Testing Method Spesifik ---");
daftarProduk[0].download(); 
const ongkir = daftarProduk[2].hitungOngkir(10000); 
console.log(`Ongkir ${daftarProduk[2].nama}: Rp${ongkir}`);