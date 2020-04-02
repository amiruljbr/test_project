function changeFruit(arr) {
    let objFruit3 = []
    for (let i = 0; i < arr.length; i++) {
        let objFruit = {}
        objFruit.fruit = arr[i][0]
        objFruit.price = arr[i][1]
        objFruit.quntiry = arr[i][2]
        objFruit3.push(objFruit)
    }
    console.log(objFruit3)
}

// var fruit2 = [
//     { fruit: 'banana', price: 4000, quntiry: 30 },
//     { fruit: 'watermelon', price: 15000, quntiry: 50 },
//     { fruit: 'avocado', price: 7000, quntiry: 15 }
// ]
var obj = changeFruit([['banana', 4000, 30], ['watermelon', 15000, 50], ['avocado', 7000, 15]])
console.log(obj)

// changeFruit([['banana', 4000, 30], ['watermelon', 15000, 50], ['avocado', 7000, 15]])