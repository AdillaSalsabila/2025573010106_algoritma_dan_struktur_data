function pangkat(basis, eksponen) {
    if (eksponen === 0) {
        return 1;
    }
    return basis * pangkat(basis, eksponen - 1);
}
function balikString(str) {
    if (str.length <= 1) {
        return str;
    }
    let karakterTerakhir = str[str.length - 1];
    let sisaString = str.slice(0, str.length - 1);
    
    return karakterTerakhir + balikString(sisaString);
}
function cekPalindrom(str) {
    const stringAsli = str.toLowerCase();
    const stringTerbalik = balikString(stringAsli);
    
    return stringAsli === stringTerbalik;
}
console.log("\n1. Pengujian Fungsi Pangkat:");
console.log(`2^3 = ${pangkat(2, 3)}`); 
console.log(`5^4 = ${pangkat(5, 4)}`); 

console.log("\n2. Pengujian balikString:");
console.log(`'halo' -> '${balikString('halo')}'`); 
console.log(`'javascript' -> '${balikString('javascript')}'`);

console.log("\n3. Pengujian cekPalindrom:");
const kataUji = ['katak', 'civic', 'level', 'makan'];

kataUji.forEach(kata => {
    const hasil = cekPalindrom(kata) ? "Palindrom" : "Bukan Palindrom";
    console.log(`'${kata}' -> ${hasil}`);
});



