function pasanganTerbesar(num) {
  // you can only write your code here!
  str_num = num.toString(); //ubah number ke string agar dapat di slice ke dalam 2-2 element
  var angka2 = []; // variabel untuk angka yang sudah dipisah 2-2
  for (var i=0; i<str_num.length-1; i++){
	  angka2.push(str_num.slice(i,i+2));
  }
  angka2.sort(function(a,b){return b - a});  //sorting descending
  return angka2[0]; //return angka terbesar setelahj disort
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99