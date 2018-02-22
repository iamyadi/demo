function slasher(arr, howMany) {
    // 请把你的代码写在这里
    arr = arr.splice(howMany);
    return arr;
}

var result = slasher([1, 2, 3], 2);
console.log(result);