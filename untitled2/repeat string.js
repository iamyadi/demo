function repeat(str, num) {
    // 请把你的代码写在这里
    if (num>0){return str.repeat(num)}
    else
    {return "";}

}

var result = repeat("abc", -2);
console.log(result);