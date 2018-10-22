/**
 * 处理哈希表键值碰撞
 * 处理方法1
 *  开链法
 * @description:
 * 在底层数组中每个元素存储的不再是单个值，而是另一个数据结构,这样就解决了即使键的值一致，但还是能将值存储的问题
 */

class hashtable {
    constructor(length = 10) {
        this.table = new Array(length);
        this.bulidCHains();
    }
    /**
     * 创建一个链
     */
    bulidCHains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
    betterHash(string) {
        const H = 37;
        let total = 0;
        string = string + '';
        for (let i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    /**
     * 添加数据
     * @param {number} key 键 
     * @param {any} value 值
     */
    put(key, data) {
        let pos = this.betterHash(key);
        let index = 0;
        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = data;
        }
        else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
        }
        ++index;
    }

    showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            this.table[i].forEach(ele => {
                console.log(ele);
            });
        }
    }
    /**
     * 根据键找值
     * @param {number} key 
     */
    get(key) {
        var index = 0;
        var pos = this.betterHash(key);
        if (this.table[pos][index] = key) {
            return this.table[pos][index];
        }
        else {
            while (this.table[pos][index] != key) {
                index ++;
            }
            return this.table[pos][index];
        }
        index++;
        return undefined;
    }
}
let h = new hashtable();