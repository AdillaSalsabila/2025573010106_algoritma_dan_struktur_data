const dataMahasiswa = [
    { nama: 'amarawiwi', nilai: 88 },
    { nama: 'Siti arirang', nilai: 72 },
    { nama: 'ken dedes melati', nilai: 95 },
    { nama: 'dillaajanira', nilai: 45 },
    { nama: 'nowlalilaila', nilai: 60 },
    { nama: 'iqisa liyala', nilai: 78 }
];
function hitungStatistik(arrMahasiswa) {
    const total = arrMahasiswa.length;
    
    const hasilReduce = arrMahasiswa.reduce((acc, curr) => {
        return {
            totalNilai: acc.totalNilai + curr.nilai,
            tertinggi: curr.nilai > acc.tertinggi ? curr.nilai : acc.tertinggi,
            terendah: curr.nilai < acc.terendah ? curr.nilai : acc.terendah
        };
    }, { totalNilai: 0, tertinggi: -Infinity, terendah: Infinity });

    return {
        total: total,
        rataRata: (hasilReduce.totalNilai / total).toFixed(2),
        tertinggi: hasilReduce.tertinggi,
        terendah: hasilReduce.terendah
    };
}
function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}
function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade = '';
        if (mhs.nilai >= 85) grade = 'A';
        else if (mhs.nilai >= 75) grade = 'B';
        else if (mhs.nilai >= 65) grade = 'C';
        else if (mhs.nilai >= 50) grade = 'D';
        else grade = 'E';
        
        return { ...mhs, grade: grade };
    });
}
console.log("=== LAPORAN NILAI MAHASISWA ===");

const statistik = hitungStatistik(dataMahasiswa);
console.log(`\nStatistik Kelas:`);
console.log(`- Total Mahasiswa: ${statistik.total}`);
console.log(`- Rata-rata Nilai: ${statistik.rataRata}`);
console.log(`- Nilai Tertinggi: ${statistik.tertinggi}`);
console.log(`- Nilai Terendah : ${statistik.terendah}`);

const mahasiswaLulus = filterLulus(dataMahasiswa, 65);
console.log(`\nDaftar Mahasiswa Lulus (Batas 65):`);
mahasiswaLulus.forEach(mhs => {
    console.log(`> ${mhs.nama} (${mhs.nilai})`);
});
const dataDenganGrade = tambahGrade(dataMahasiswa);
console.log(`\nDetail Seluruh Mahasiswa (Grade):`);
dataDenganGrade.forEach((mhs, index) => {
    console.log(`${index + 1}. Nama: ${mhs.nama.padEnd(15)} | Nilai: ${mhs.nilai} | Grade: ${mhs.grade}`);
});





