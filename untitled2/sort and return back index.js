function where(arr, num) {
    // 请把你的代码写在这里
    arr.push(num);
    function members(a,b) {
        return a-b;
    }
    var newArr = arr.sort(members);

    return newArr.indexOf(num);
}

var result = where([40, 60], 50);
console.log(result);