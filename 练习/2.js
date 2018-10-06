/**
 * 线性表复习
 */
let list = [];
class sqlList {
    constructor(list_size) {
        this.init_list(list_size);
    }
    init_list(list_size = 10) {
        list.length = list_size;
        console.log(`list长度为${list_size}`);
    }
    /**
     * 自己实现的插入
     */
    insert_list(index, value) {
        if (list.length == 0) {
            console.log(`空表溢出!`);
            return;
        }
        if (index < 0 || index > list.length) {
            console.log(`下标越界`);
            return;
        };
        for (let i = list.length - 1; i >= index; i--) {
            list[i + 1] = list[i];
        }
        list[index] = value;
        console.log(`插入完成，下标为 ${index},值为 ${value}`);
    }
    /**
     * 删除
     */
    delet_list(index) {
        if (list.length == 0) {
            console.log(`空表!`);
            return;
        }
        if (index < 0 || index > list.length) {
            console.log(`下标越界`);
            return;
        };
        for (let i = index; i < list.length - 1; i++) {
            list[i] = list[i + 1];
        }
        list.length--;
        console.log(`删除完毕`);
    }
    /**
     * 查询某个下标的值
     */
    get_list(index) {
        if (list.length == 0) {
            console.log(`空表!`);
            return;
        }
        if (index < 0 || index > list.length) {
            console.log(`下标越界`);
            return;
        };
        let resout = list[index];
        console.log(`下标${index}的值为${resout}`);
    }
    /**
     * 修改某个下标的值
     */
    change_list(index, value) {
        if (list.length == 0) {
            console.log(`空表!`);
            return;
        }
        if (index < 0 || index > list.length) {
            console.log(`下标越界`);
            return;
        };
        list[index] = value;
        console.log(`下标${index}的值已经修改成${value}`);
    }
}