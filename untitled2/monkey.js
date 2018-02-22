function chunk(arr, size) {
    // 请把你的代码写在这里
var newArr=[];
    for (i=0, j=0; i<arr.length;i+=size, j++){
  newArr[j] = arr.slice(i,i+size);

    }
    return newArr;
}

var result = chunk(["a", "b", "c", "d"], 2);
console.log(result);