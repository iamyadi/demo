function rot13(str) { // LBH QVQ VG!
   var str2 = [];
    for (i=0; i<str.length;i++){
     if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=(65+26-1)){
      str2[i] = String.fromCharCode((str.charCodeAt(i)-65+13)%26 + 65);
     }
     else { str2[i] = str[i];}
    }
return str2.join("");
}
var abc = rot13("AAABB CCC PNZC");  // 你可以修改这一行来测试你的代码
console.log(abc);
console.log(14%26);