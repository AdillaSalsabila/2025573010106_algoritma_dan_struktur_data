class Mahasiswa {
    constructor(nama, nim, jurusan){
        this.nama    = nama;
        this.nim     = nim;
        this.jurusan = jurusan;
        this.nilai   = [];
    }
    tambahNilai(nilai) {
        this.nilai.push(nilai);
    }
    hitunggRataRata() {
        if(this.nilai.lenght === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return (total / this.nilai.lenght).toFixed(2);
    }
    getInfo(){
        return '[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: $ {this.hitungRataRata()}';
    }
}
const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);

console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

class Kalkulator {
static tambah(a, b) { return a + b; }
static kurang(a, b) { return a - b; }
static kali(a, b) { return a * b; }
static bagi(a, b) {
if (b === 0) return 'Error: bagi nol';
return a / b;
}
}
console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));
console.log('10 * 5 =', Kalkulator.kali(10, 5));
console.log('10 / 0 =', Kalkulator.bagi(10, 0));

class Lingkaran {
constructor(jariJari) {
this._jariJari = jariJari; 
}

get jariJari() { return this._jariJari; }
get luas() { return (Math.PI * this._jariJari ** 2).toFixed(2); }
get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }

set jariJari(nilai) {
if (nilai <= 0) throw new Error('Jari-jari harus positif!');
this._jariJari = nilai;
}
}
console.log('\n=== Getter & Setter ===');
const l = new Lingkaran(7);
console.log('Jari-jari:', l.jariJari); 
console.log('Luas :', l.luas); 
console.log('Keliling :', l.keliling); 
l.jariJari = 10; 
console.log('Setelah diubah - Luas:', l.luas);

// 2. Buat class BankAccount
class BankAccount {
    constructor(namaPemilik, saldoAwal = 0) {
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;
    }
    setor(jumlah) {
        if (jumlah <= 0) {
            console.log("Error: Jumlah setoran harus lebih besar dari 0.");
        } else {
            this.saldo += jumlah;
            console.log(`Berhasil setor Rp${jumlah}.`);
        }
    }
    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log("Error: Jumlah tarikan harus lebih besar dari 0.");
        } else if (jumlah > this.saldo) {
            console.log("Error: Saldo tidak mencukupi.");
        } else {
            this.saldo -= jumlah;
            console.log(`Berhasil tarik Rp${jumlah}.`);
        }
    }
    cekSaldo() {
        console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
    }
    static transfer(akun1, akun2, jumlah) {
        if (jumlah <= 0) {
            console.log("Error: Jumlah transfer tidak valid.");
            return;
        }

        if (akun1.saldo >= jumlah) {
            akun1.tarik(jumlah);
            akun2.setor(jumlah);
            console.log(`Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik} berhasil.`);
        } else {
            console.log("Error: Transfer gagal, saldo pengirim tidak mencukupi.");
        }
    }
}

const akunA = new BankAccount('Adilla', 100000);
const akunB = new BankAccount('Salsabila', 50000);

console.log("--- Saldo Awal ---");
akunA.cekSaldo();
akunB.cekSaldo();

console.log("\n--- Uji Method Setor & Tarik ---");
akunA.setor(50000);    
akunA.setor(-1000);    
akunB.tarik(20000);    
akunB.tarik(100000);   

console.log("\n--- Uji Static Method Transfer ---");
BankAccount.transfer(akunA, akunB, 30000); 

console.log("\n--- Saldo Akhir ---");
akunA.cekSaldo();
akunB.cekSaldo();