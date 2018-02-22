function titleCase(str) {
    // 请把你的代码写在这里
    str=str.toLowerCase();
    console.log(str);

    var array;
        array=str.split(" ");
console.log(array);

    var newArray=[];
    for (var i=0; i<array.length; i++){
        newArray[i]=array[i][0].toUpperCase()+array[i].slice(1);


    }

    return newArray.join(" ");


}


newArray = titleCase("I'm a little tea pot");
console.log(newArray);