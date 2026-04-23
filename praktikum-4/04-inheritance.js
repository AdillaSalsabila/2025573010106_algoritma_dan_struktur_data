class Kendaraan {
constructor(merk, model, tahun) {
this.merk = merk;
this.model = model;
this.tahun = tahun;
this.kecepatanSaatIni = 0;
}
akselerasi(tambahan) {
this.kecepatanSaatIni += tambahan;
console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
}
rem() {
this.kecepatanSaatIni = 0;
console.log(`${this.merk} ${this.model}: berhenti.`);
}
info() {
return `${this.tahun} ${this.merk} ${this.model}`;
}
}
class Mobil extends Kendaraan {
constructor(merk, model, tahun, jumlahPintu) {
super(merk, model, tahun); 
this.jumlahPintu = jumlahPintu; 
}
bunyikanKlakson() {
console.log(`${this.merk}: Beep beep!`);
}
info() {
const infoParent = super.info(); 
return `${infoParent} (${this.jumlahPintu} pintu)`;
}
}
class Motor extends Kendaraan {
constructor(merk, model, tahun, jenisMotor) {
super(merk, model, tahun);
this.jenisMotor = jenisMotor;
}
wheelie() {
if (this.kecepatanSaatIni > 50) {
console.log(`${this.merk}: Wheelie!`);
} else {
console.log('Kecepatan terlalu rendah untuk wheelie.');
}
}
info() {
return `${super.info()} [${this.jenisMotor}]`;
}
}
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');
console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());
console.log('\n=== Aksi ===');
mobil.akselerasi(60); 
mobil.bunyikanKlakson(); 

motor.akselerasi(80);
motor.wheelie();
motor.rem();

console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil); 
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan); 
console.log('motor instanceof Mobil :', motor instanceof Mobil); 

console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));

// 04-inheritance.js

class Hewan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    bersuara() {
        console.log(`${this.nama} berkata: ${this.suara}`);
    }

    info() {
        process.stdout.write(`Nama: ${this.nama} | `); // Menggunakan stdout agar info menyambung
    }
}
class Anjing extends Hewan {
    fetch() {
        console.log(`${this.nama} mengambil bola!`);
    }
    info() {
        super.info();
        console.log(`(jenis: anjing)`);
    }
}
class Kucing extends Hewan {
    cakarSofa() {
        console.log(`${this.nama} mencakar sofa!`);
    }
    bersuara() {
        super.bersuara();
        console.log('Purrr...');
    }
    info() {
        super.info();
        console.log(`(jenis: kucing)`);
    }
}
const anjing1 = new Anjing('Buddy', 'Woof!');
const anjing2 = new Anjing('Max', 'Guk guk!');
const kucing1 = new Kucing('Luna', 'Meow');
const kucing2 = new Kucing('Milo', 'Ngeong');

const daftarHewan = [anjing1, anjing2, kucing1, kucing2];

console.log("--- Demonstrasi Polymorphism ---");
daftarHewan.forEach((hewan) => {
    hewan.info();    
    hewan.bersuara(); 
    console.log("--------------------");
});
console.log("\n--- Uji Method Spesifik ---");
anjing1.fetch();
kucing1.cakarSofa();