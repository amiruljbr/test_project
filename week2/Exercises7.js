//No.1 Menyusun baris bintang
var rows1=5; // input the number of rows1
// do loops to display asterisks in the console.
for (i=1; i<=rows1; i++){
	console.log('*');
}

//No.2 

var rows2=6; // input the number of rows2
// do loops to display asterisks in the console.
for (var j=1 ; j<=rows2; j++){
  let k=1;
  let printbintang='';
  while (k<=rows2){
  printbintang= printbintang + '*';
  k++;
  }
	console.log(printbintang);
}

//No 3

var rows3=6; // input the number of rows3
// do loops to display asterisks in the console.
for (var j=1 ; j<=rows3; j++){
  let k=1;
  let printbintang='';
  while (k<=j){
  printbintang= printbintang + '*';
  k++;
  }
	console.log(printbintang);
}
		
