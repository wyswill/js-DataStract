let arr = [12, 31, 23, 12, 312, 42341, 35, 13, 51, 35134, 51, 345, 14, 513, 45, 134, 513, 451];
function find(value) {
    let temp = arr.sort(),
        flg = 0,
        length = arr.length - 1;
    while (flg <= length) {
        let height = Math.floor(arr.length / 2);
        if (arr[height] == value) {
            return arr[height];
        } else if (height < value) {
            length = height + 1;
        } else {
            length = height - 1;
        }
    }
    return -1;
}