const fs = require('fs');
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value) {
        this.data[key] = value;
    }
    delet(key) {
        delete this.data[key];
    }
    find(key){
        return this.data[key];
    }
    showData() {
        for (let key in this.data) {
           console.log(`${key}---->电话----->${this.data[key]}`);
        }
    }
}
let d = new Dictionary(),
    phoneNumber = fs.readFileSync('./phoneNumber.txt');
phoneNumber = phoneNumber.toString().split('\n');
for (let i = 0; i < phoneNumber.length; i++) {
    let temp = '';
    temp = phoneNumber[i].split(' ');
    d.add(temp[0], temp[1]);
}
console.log(d.showData());
console.log(d.find('张天佑'));
