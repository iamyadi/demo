var mySet1 ;
var myArray;
//var mySet2;
function mutation(arr) {
    // 请把你的代码写在这里
    arr[0] = arr[0].toLowerCase();
    mySet1 = new Set(arr[0]);

    myArray = arr[1];
    myArray = myArray.toLowerCase();
    //mySet2 = new Set(arr[1]);
    //return mySet1.has("o");
    for (i=0; i<myArray.length;i++){
        if (false == mySet1.has(myArray[i])){return false}

    }
return true;
}

var result = mutation(["hello", "heo"]);
console.log(result);



/*function test(aa) {
    var  myArray=["A","B"];

    mySet = new Set(myArray);
    return mySet.has(aa);
}
var result = test("A");
console.log(result);
*/