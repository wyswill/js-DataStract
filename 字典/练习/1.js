/**
 * 字典类
 */


class Dictionary {
    constructor() {
        this.datastore = [];
    }
    /**
     * 添加数据
     * @param {any} key 键
     * @param {any} value 值
     */
    add(key, value) {
        this.datastore[key] = value;
    }
    /**
     * 
     * @param {any} kay 要查找的键 
     */
    find(kay) {
        return this.datastore[kay];
    }
    remove(kay) {
        delete this.datastore[kay];
    }
    showAll() {
        for (let key in this.datastore) {
            if (this.datastore.hasOwnProperty(key)) {
                let element = this.datastore[key];
                console.log(`${key}  ${element}`);
            }
        }
    }
    count() {
        let n = 0;
        for (let kay in this.datastore) {
            n++;
        }
        return n;
    }
    clear() {
        for (let key in this.datastore) {
            delete this.datastore[key];
        }
    }
    sort() {
        let temp = Object.keys(this.datastore).sort();
        for (let key in temp) {
            console.log(temp[key]);
        }
    }
}
exports.Dictionary = Dictionary;