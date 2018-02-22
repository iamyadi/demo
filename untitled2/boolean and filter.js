
function bouncer(arr) {

    return arr.filter(Boolean);
}

var result = bouncer([7, "ate", "", false, 9]);
console.log(result);

//return arr.filter(function(val){ return Boolean(val); })

