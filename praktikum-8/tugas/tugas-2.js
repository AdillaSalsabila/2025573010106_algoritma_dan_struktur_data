function subArrayJumlahK(arr, k) {
  const map = new Map();
  map.set(0, 1); 
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (map.has(currentSum - k)) {
      count += map.get(currentSum - k);
    }
    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }

  return count;
}
function karakterPertamaUnik(s) {
  const charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i; 
    }
  }

  return -1; 

function topKFrequent(arr, k) {
  const frequencyMap = new Map();
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  const sortedElements = [...frequencyMap.entries()].sort(
    (a, b) => b[1] - a[1],
  );
  return sortedElements.slice(0, k).map((entry) => entry[0]);
}
console.log("=== 2. Subarray Jumlah K ===");
console.log(
  `subArrayJumlahK([1, 1, 1], 2) -> Hasil: ${subArrayJumlahK([1, 1, 1], 2)} (Ekspektasi: 2)`,
);

console.log("\n=== 3. Karakter Pertama Unik ===");
console.log(
  `karakterPertamaUnik('leetcode') -> Hasil Indeks: ${karakterPertamaUnik("leetcode")} (Huruf 'l')`,
);

console.log("\n=== 4. Top K Frequent ===");
console.log(
  "topKFrequent([1, 1, 1, 2, 2, 3], 2) -> Hasil:",
  topKFrequent([1, 1, 1, 2, 2, 3], 2),
  "(Ekspektasi: [1, 2])",
);
}
