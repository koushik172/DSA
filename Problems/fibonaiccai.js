
function fabinaicci(range) {
    let arr = []
    i = 0;
    j = 1;
    k = 0;
    temp = 0;
    for (k; k<range; k++) {
        temp = i + j;
        i = j;
        j = temp;
        arr.push(temp);
    }
    console.log(arr);
};

fabinaicci(10);
