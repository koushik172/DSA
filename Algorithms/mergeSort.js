// merge sort function
function mergeSort(arr) {
    // base case: if the array has less than 2 elements, it is already sorted
    if (arr.length < 2) {
        return arr;
    }
    // find the middle point of the array
    var middle = Math.floor(arr.length / 2);
    // divide the array into two: left and right
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    // recursively sort the left and right parts
    left = mergeSort(left);
    right = mergeSort(right);
    // merge the left and right parts
    return merge(left, right);
}

// merge function
function merge(left, right) {
    var result = [];
    var il = 0;
    var ir = 0;
    // compare and merge left and right parts
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    // add the remaining elements to the result array
    return result.concat(left.slice(il)).concat(right.slice(ir));
}

console.log(mergeSort([4,1,2,5,3,7,9,3]));