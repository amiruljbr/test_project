function cariMedian(arr) {
  // you can only write your code here!
	for ( var i=0; i<arr.length; i++){
		for ( var j=0; j<arr.length-1; j++){
			if (arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr [j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5, 9, 7, 2, 1])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 1, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5