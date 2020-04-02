function balikString (kata){
  	var katastring=kata.toString();
	var hasil ='';
	for(var i=katastring.length-1 ; i>=0; i--){
		hasil=hasil+katastring[i];
	}
	return hasil;
}

//TEST CASE
console.log(balikString('abcdefghijklmn'));
console.log(balikString(123456789));
