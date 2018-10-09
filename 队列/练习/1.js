class Queue {
    constructor() {
        this.dataStore = [];
    }
    /**
     * 向队尾添加一个元素
     * @param {any} element 要添加的元素
     */
    enqueue(element) {
        this.dataStore.push(element);
    }
    /**
     * 删除队首的元素
     */
    dequeue() {
        this.dataStore.shift();
    }
    /**
     * 读取队首的元素
     */
    front() {
        return this.dataStore[0];
    }
    /**
     * 读取队尾的元素
     */
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    /**
     * 显示队列内的所有元素
     */
    toString() {
        let str = '';
        for (let i = 0; i < this.dataStore.length; i++) {
            str += this.dataStore[i];
        }
        return str;
    }
    /**
     * 判断队列是否为空
     */
    empty() {
        if (this.dataStore.length < 0) return true
        else return false;
    }
}
