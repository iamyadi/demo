

function largestOfFour(arr) {
    var newArr=[];

for (i=0; i<arr.length; i++){
        newArr[i]=Math.max.apply(null,arr[i]);
    }

    return newArr;
}

var result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);