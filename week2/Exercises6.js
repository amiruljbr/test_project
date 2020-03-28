//soal nomor 1
console.log('LOOPING PERTAMA')
let i = 2;
while (i<21) {
  console.log(i + ' - I love coding');
  i=i+2;
}

console.log('LOOPING KEDUA')
while (i>3) {
  i= i-2;
  console.log(i + ' - I will become fullstack developer');
}

//soal no 2

console.log('LOOPING PERTAMA')
j=1;
while (j<21) {
  console.log(j + ' - I love coding');
  j++;
}

console.log('LOOPING KEDUA');
while (j>1) {
  j--;
  console.log(j + ' - I will become fullstack developer');
}

//soal no 3
//looping pertama pertambahan 1
for (k=1 ; k<=100 ; k++){
	if (k % 2 === 1) {
		console.log('GANJIL');
	} 
	else {
		console.log('GENAP');		
	}
}

//looping kedua penambahanambahan 2
for (l=1; l<=100; l=l+2){
	if(l % 3 === 0){
		console.log(l + ' kelipatan 3');
	} else {
		console.log('');
	}
}

//looping ketiga penambahan 5
for (m=1; m<=100; m=m+5){
	if(m % 6 === 0){
		console.log(m + ' kelipatan 6');
	} else {
		console.log('');
	}
}

//looping keempat penambahan 9
for (n=1; n<=100; n=n+9){
	if(n % 10 === 0){
		console.log(n + ' kelipatan 9')
	} else {
		console.log('');
	}
}

