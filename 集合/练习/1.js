/**
 * 集合
 */


class Set {
    constructor() {
        this.dataStor = new Array();
    }
    add(data) {
        if (this.dataStor.indexOf(data) < 0) {
            this.dataStor.push(data);
            return true;
        }
        else return false;
    }
    remove(data) {
        let pos = this.dataStor.indexOf(data);
        if (pos > -1) {
            this.dataStor.splice(pos, 1); return true;
        } else return false;
    }
    show() {
        this.dataStor.forEach((ele, index) => {
            console.log(`index ---> ${index}   element ---> ${ele}`);
        });
    }
    /**
     * 辅助方法，检查两个集合中的公共数据
     * @param {any} data 
     */
    contains(data) {
        return this.dataStor.indexOf(data) > -1 ? true : false;
    }
    /**
     * 并集
     * @param {set} set 要检查的集合
     */
    union(set) {
        let temp = new Set();
        //现备份集合的数据
        for (let i = 0; i < this.dataStor.length; i++) {
            temp.dataStor[i] = this.dataStor[i];
        }
        for (let i = 0; i < set.dataStor.length; i++) {
            //对比两个集合中的共同数据
            if (!temp.contains(set.dataStor[i])) {
                temp.add(set.dataStor[i]);
            }
        }
        return temp;
    }/**
     * 返回两个集合的交集
     * @param {set} set 要计算的集合对象
     */
    intersect(set) {
        let temp = new Set();
        this.dataStor.forEach((ele, index) => {
            if (set.contains(ele)) {
                temp.add(ele);
            }
        });
        return temp;
    }
    /**
     * 判断是否是要比较集合的子集
     * @param {set} set 要比较的集合
     */
    subset(set) {
        if (this.dataStor.length > set.dataStor.length) return new Error('该长度超过要比较的集合长度');
        for (let key in this.dataStor) {
            if (!set.contains(key)) {
                return true;
            }
        }
        return false;
    }
}