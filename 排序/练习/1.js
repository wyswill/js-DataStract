/**
 * 排序
 */

class CArray {
    constructor(numElements) {
        this.datastor = [];
        this.pos = 0;
        this.numElements = numElements;

        for (let i = 0; i < this.numElements; i++) {
            this.datastor[i] = i;
        }

    }
    insert(element) {
        this.datastor[this.pos++] = element;
    }
    toString() {
        this.datastor.forEach(ele => {
            console.log(ele);
        });
    }
    clear() {
        delete this.datastor;
        this.datastor = [];
    }
    setData() {
        for (let i = 0; i < this.numElements; i++) {
            this.datastor[i] = Math.floor(Math.random() * this.numElements + 1);
        }
    }
    swap(arr, index_a, index_b) {
        let temp = add[index_a];
        arr[index_a] = arr[index_b];
        arr[index_b] = temp;
    }
}

/* 冒泡排序 */

class mp {
    constructor() {
        this.textData = [1, 3, 12, 31, 23, 12, 3123, 1, 23, 12, 3, 123, 4, 15, 234, 43, 63, 57, 4567, 45, 67, 2, 4];
        // this.addData();
    }
    addData() {
        // for (let i = 0; i < 10; i++) {
        //     this.textData[i] = Math.floor(Math.random() * 10);
        // }
    }
    sort() {
        for (let i = 0; i < this.textData.length; i++) {
            let temp = 0;
            for (let j = 0; j < this.textData.length; j++) {
                if (this.textData[i][j] > this.textData[i][j + 1]) {
                    temp = this.textData[i][j];
                    this.textData[i][j] = this.textData[i][j + 1];
                    this.textData[i][j + 1] = temp;
                }
            }
        }
    }
    showData() {
        console.table(this.textData);
    }
}

