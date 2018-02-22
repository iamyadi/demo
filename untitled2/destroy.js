function destroyer(arr) {
    // 请把你的代码写在这里

    var orgArr = arguments[0];
    var mySet = new Set();
    for(i=1;i<arguments.length;i++){
        mySet.add(arguments[i]);
    }
    var result = [];
    for(i=0;i<orgArr.length;i++){
        if(!mySet.has(orgArr[i])){
            result.push(orgArr[i]);
        }
    }
    return result;
}

result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);