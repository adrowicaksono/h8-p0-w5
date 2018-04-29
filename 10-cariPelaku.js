function cariPelaku(str) {
  // you can only write your code here!
  var regexPattern = new RegExp(/abc/g);
  var hasil = str.match(regexPattern)
  return hasil.length;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
