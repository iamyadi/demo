function confirmEnding(str, target) {
    // 请把你的代码写在这里
    for(i= target.length-1,j=str.length-1;
        i>=0;
        i--,j--){
        if(target[i] !=str[j]){
            return false;
        }
    }

    return true;
}

var result=confirmEnding("Bastian n e", "ne");
console.log(result);