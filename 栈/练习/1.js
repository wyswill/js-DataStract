function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}
/**
 * 压入栈
 * @param {number} element 要压入栈的元素
 */
function push(element) {
    this.dataStore.push(element);
}
/**
 * 弹出栈顶元素
 */
function pop() {
    return this.dataStore.pop();
}
/**
 * 返回数组的第top-1 个位置的元素
 */
function peek() {
    return this.dataStore[this.top - 1];
}
/**
 * 得到栈的长度
 */
function length() {
    return this.dataStore.length;
}
/**
 * 清空栈
 */
function clear() {
    this.top = 0;
}
/**
 * 进制转换
 * @param {number} num 要输入的数
 * @param {number} base 要转换的进制
 */
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor((num /= base));
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
/**
 * 回文判断
 * @param {String} word 要判断的字符串
 */
function isPalindrome(word) {
    let s = new Stack(),
        str = '';
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    while (s.dataStore.length > 0) {
        str += s.pop();
    }
    if (word == str) return true;
    else return false;
}
exports.Stack = new Stack();