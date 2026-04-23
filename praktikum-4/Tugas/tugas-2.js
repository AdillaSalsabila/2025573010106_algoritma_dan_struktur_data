class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let i = 0; i < ekspresi.length; i++) {
        let karakter = ekspresi[i];

        if (karakter === '(') {
            stack.push(karakter);
        } 
    
        else if (karakter === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}
const testCases = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '((()))',
    'if (x > 0) { return (y); }', 
];

console.log("=== Hasil Pengujian Keseimbangan Kurung ===");

testCases.forEach(ekspresi => {
    const hasil = cekKurungSeimbang(ekspresi);
    console.log(`'${ekspresi}' -> Seimbang: ${hasil}`);
});