let list = [];
/**
 * 线性表初始化
 * 
 */
function init_list(list_size=10) {
    list.length = list_size; //定义线性表长度
    console.log(`线性表长度定义为${list.length}`);
}
/**
     *插入值

     @element:要插入的元素
     @index:要插入的下标
     **/
function insert_list(index = 0, element = undefined) {
    if (index < 0 || index > list.length) {
        console.log('位置出错');
        return;
    } else {
        for (let i = list.length - 1; i >= index; i--) {
            list[i + 1] = list[i];
        }
        /***
         * 小记：这里使用倒序循环来遍历数组，这样就只遍历要插入的下标之后的数据，从而节省运算时间
         */
        list[index] = element;
    }
    console.log(`list[${index}]=${element}`);
}
/**
 * 删除数据
 * @index:要删除的数据下标
 */
function delet_list(index = 0) {
    if (list.length == 0) {
        console.log(`空表溢出!`);
        return;
    }
    if (index < 0 || index > list.length - 1) {
        console.log(`不存在该元素!`);
        return;
    } else if (index < list.length - 1) {
        for (let i = index; i < list.length - 1; i++) {
            list[i] = list[i + 1]; //覆盖掉当前下标的值
        }
    }
    list.length--;
    console.log(`${index}下标的数据已经删除`);
}
/**
 * 获取元素
 */
function get_list(index = 0) {
    if (index < 0 || index > list.length - 1) console.log('下标越界');
    for (let i = 0; i < list.length - 1; i++) {
        if (i == index) {
            console.log(`下标为${index}的值为${list[i]}`);
        }
    }
}
/**
 * 清除线性表
 */
function drop_list() {
    list = [];
    console.log('线性表已清除');
}
/**
 * 修改线性表
 */
function change_list(index = 0, element = undefined) {
    if (index < 0 || index > list.length - 1) {
        console.log('下标越界');
        return;
    }
    list[index] = element;
    console.log(`下标为${index}的值为${list[index]}`);
}