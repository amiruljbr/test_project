function xo(str) {
  // you can only write your code here!
	let sumO = 0;
	let sumX = 0;
	for (i=0 ;  i < str.length ; i++){	
		if ( str[i] === 'o'){
			sumO = sumO + 1; //menambah conter sumO sebanyak 1
		} else if (str[i] === 'x') {
			sumX = sumX + 1; //menambah conter sumX sebanyak 1
		} else {
			//Tidak Terjadi Apa2
		}
	}
	if (sumO===sumX) {
    return true;
  } else {
    return false;
  }		
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
