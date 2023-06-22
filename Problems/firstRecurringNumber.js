
function recurr(arr) {
    const dict = {}
    for (var i = 0; i < arr.length; i++) {
        console.log(dict[arr[i]]);
        if (dict[arr[i]] !== undefined) {
            return arr[i];
        } else {
            dict[arr[i]] = i;
        };
        
        console.log(dict);
    }
    return undefined;
};

var arr = [4, 1, 4, 1, 6, 4, 2]

console.log(recurr(arr));
