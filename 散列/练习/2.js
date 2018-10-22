/**
 * 散裂化整形键
 */

class HashTable {
    constructor(length = 10) {
        this.table = new Array(length);
    }
    /**
     * 得到一个随机整数
     * @param {number} min 最小值
     * @param {number} max 最大值
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /**
     * 得到学生成绩
     * @param {number} arr 学生成绩
     */
    genStuData(arr) {
        for (let i = 0; i < arr.length; i++) {
            let num = '';
            for (let j = 1; j <= 9; j++) {
                num += Math.floor(Math.random() * 10);
            }
            num += this.getRandomInt(50, 100);
            arr[i] = num;
        }
    }
    put(key, value) {
        this.table[key] = value;
    }
    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            console.log(`this.table[i]   ${this.table[i]}`);
        }
    }

}

let numStudents = 10;
let arrSize = 97;
let idLen = 9;
let students = new Array(numStudents);
let h = new HashTable();
h.genStuData(students);
console.log("Student data: \n");
for (let i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0, 8) + " " +
        students[i].substring(9));
}
console.log("\n\nData distribution: \n");
for (let i = 0; i < students.length; ++i) {
    h.put(students[i]);
}
h.showDistro();


