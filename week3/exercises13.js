function targetTerdekat(arr) {
	var letako;
	var letakx=[];
	var jarak=[];
	var countx = 0;
	for (var i=0; i<arr.length; i++){
		if (arr[i]=='x'){
			letakx.push(i);
			countx = countx + 1;
		} else if (arr[i]=='o'){
			letako = i;
		}
	}
	
	if (countx==0) {
		return 0;
	}
	
	for ( var i=0; i <countx; i++){
		jarakxo = Math.abs(letakx[i] - letako);
		jarak.push(jarakxo);
	}
	
	var jarakterdekat=jarak[0];
	for ( var i=1; i <jarak.length; i++){
		if (jarak[i] < jarakterdekat){
			jarakterdekat=jarak[i];
		} 
	}
	
	return jarakterdekat;
	//console.log(letakx);
	//console.log(jarak);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2