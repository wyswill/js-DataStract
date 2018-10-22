let arr = [123, 3453, 312, 31, 23, 23, 4, 235, 14, 123, 412, 34, 15, , 4123, 412, 341, 34];
function findMinMax(arr) {
    let max = 0, min = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            min = arr[i];
            max = arr[j];
            if (min < arr[j]) arr.shift(min);
            else if (max > arr[j]) arr.push(max);
        }
    }
    return arr;
}

console.log(findMinMax(arr));