/**
 * 列表的抽象数据类型定义
 * 
    listSize（属性） 列表的元素个数
    pos（属性） 列表的当前位置
    length（属性） 返回列表中元素的个数
    clear（方法） 清空列表中的所有元素
    toString（方法） 返回列表的字符串形式
    getElement（方法） 返回当前位置的元素
    insert（方法） 在现有元素后插入新元素
    append（方法） 在列表的末尾添加新元素
    remove（方法） 从列表中删除元素
    front（方法） 将列表的当前位置设移动到第一个元素
    end（方法） 将列表的当前位置移动到最后一个元素
    prev（方法） 将当前位置前移一位
    next（方法） 将当前位置后移一位
    currPos（方法） 返回列表的当前位置
    moveTo（方法） 将当前位置移动到指定位置
 */
console.log(`列表对象为List`);

class List {
    constructor(list_Size = 10, ...values) {
        this.list = [];
        this.list.length = list_Size;
        if (list_Size == null) {
            values.forEach((ele, index) => {
                this.list[index] = ele;
            });
        } else {
            for (let i = 0; i < list_Size; i++) {
                this.list[i] = 0;
            }
        }
        this.length = this.list.length;
        console.log(`列表的长度为${this.length}`);
    }
    changeLength() {

        this.list = this.list.filter(x => {
            return x !== undefined && x != null;
        });

        this.length = this.list.length;
    }
    /**
     * insert（方法） 在现有元素后插入新元素
     */
    insert(index, value) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }

        let data = this.list[index];
        this.list.push(data);

        this.list[index] = value;
        this.changeLength();
        console.log(`插入下标为${index}的值为${value}`);
    }
    /**
     * append（方法） 在列表的末尾添加新元素
     */
    append(value) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        this.list[this.length] = value;
        this.changeLength();
        console.log(`在列表的末尾添加新元素为${value}`);
    }
    /**
     * remove（方法） 从列表中删除元素
     */
    remove(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        } else {
            this.list[index] = undefined;
        }

        this.changeLength();
        console.log(`下标为${index}的元素已经删除`);
    }
    /**
     * clear（方法） 清空列表中的所有元素
     */
    clear() {
        this.list = [];
        this.changeLength.length;
        console.log(`已经清空列表中的所有元素`);
    }
    /**
     * getElement（方法） 返回当前位置的元素
     */
    getElement(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let res = this.list[index];
        return res;
        console.log(`${index}下的值为 ${res}`);
    }
    /**
     * toString（方法） 返回列表的字符串形式
     */
    toString() {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        return this.list.toString();
    }
    /**
     * front（方法） 将列表的当前位置设移动到第一个元素
     */
    front(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let data = this.list[index];
        this.list.unshift(data);
        console.log(`下标为${index}的值已经移到第一个元素`);
    }
    /**
     * end（方法） 将列表的当前位置移动到最后一个元素
     */
    end(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let data = this.list[index];
        this.remove(index);
        this.list.push(data);
    }
    /**
     *  prev（方法） 将当前位置前移一位
     */
    prev(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index <= 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let data = this.list[index];
        this.remove(index);
        this.insert(index - 1, data);
    }
    /**
     *next（方法） 将当前位置后移一位
     */
    next(index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let data = this.list[index];
        this.remove(index);
        this.insert(index + 1, data);
    }
    /**
     * currPos（方法） 返回列表的当前位置
     */
    currPos(value) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        let res = -1;
        this.list.forEach((ele, index) => {
            if (ele == value) {
                res = index;
            }
        })
        if (res < 0) {
            console.log(`该元素不存在列表中`);
        } else {
            return `${value}的下标为${res}`;
        }
    }
    /**
     *  moveTo（方法） 将当前位置移动到指定位置
     */
    moveTo(pos, index) {
        if (this.list == '') {
            console.log(`列表不存在`);
            return;
        }
        if (index < 0 || index > this.list.length) {
            console.log(`下标超出长度`);
            return;
        }
        let data = this.getElement(pos);
        this.remove(pos);
        this.insert(index, data);
    }

    test() {
        let start = new Date().getTime();
        for (let i = 0; i < 10000; i++) {
            li.insert(0, i);
        }
        let end = new Date().getTime();
        console.log(`耗时为${(end-start)/1000}秒`);
    }
    test_remove() {
        let start = new Date().getTime();
        for (let i = 0; i < li.list.length; i++) {
            li.remove(i);
        }
        let end = new Date().getTime();
        console.log(`耗时为${(end-start)/1000}秒`);
    }
}
let li = new List();