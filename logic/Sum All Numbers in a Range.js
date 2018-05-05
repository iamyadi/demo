function sumAll(arr) {
    var newArr = [],
        small = Math.min(arr),
        large = Math.max(arr);
    console.log("&&&"+small);
    for(i=small;i<=large; i++){
        newArr.push(i);
    }
    console.log(newArr);
    var a = newArr.reduce(function (prev,cur,index,array) {
        return prev + cur;
    });
    return a;
}
var a = sumAll([1, 4]);
console.log(a);