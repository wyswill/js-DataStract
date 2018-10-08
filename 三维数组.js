class Matrix {
    Greate(a = 10, b = 10, c = 10) {
        let arr = new Array(a);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(b);
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = new Array(c);
            }
        }
        return arr;
    }
}