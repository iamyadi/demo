function truncate(str, num) {
    // 请把你的代码写在这里
    if (str.length<=num){return str;}
    if (num>3){
        return str.slice(0, num-3)+"...";
    }
    else{ return str.slice(0,num)+"..."}

}

var result = truncate("A-tisket a-tasket A green and yellow basket", 11);
console.log(result);
