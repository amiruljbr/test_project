function pasanganTerbesar(num) {
  // you can only write your code here!
  str_num = num.toString(); //ubah number ke string agar dapat di slice ke dalam 2-2 element
  var angka2 = []; // variabel untuk angka yang sudah dipisah 2-2
  for (var i=0; i<str_num.length-1; i++){
	  angka2.push(str_num[i]+str_num[i+1]);
  }
  angkaterbesar = angka2[0];
  for (var i=1; i< angka2.length; i++){
	  if (angka2[i]> angkaterbesar){
		  angkaterbesar= angka2[i];
	  }  
  }
  return angkaterbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99