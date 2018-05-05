function where(collection, source) {
    var arr = [];
    var propArr = [];
    // What's in a name?
    for(var name in source){
        if (source.hasOwnProperty(name)) {
            propArr.push(name)
        }
    }
    for(var i=0;i<collection.length; i++){
        //console.log("$$$$$");
        //console.log(typeof collection[i]);
        for(var j=0;j<propArr.length;j++){
            var a = propArr[j];

            if(collection[i].hasOwnProperty(a)){
                if(collection[i][a] === source[a]){
                    arr.push(collection[i])
                }
            }
        }
    }
    return arr;
}

// Object.hasOwnProperty()
// Object.keys()

var a = where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
console.log(a)