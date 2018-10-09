/**
 * 4.4　练习
 */

/**
 * 1. 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算
    术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例
    子：2.3 + 23 / 12 + (3.14159×0.24。
 */
const {
    Stack
} = require('./1.js');
/**
 * 
 * @param {string} shizi 要检测的算术表达式
 */
let shizi = '2.3 + 23 / 12 + (3.14159×0.24';

function math(shizi) {
    for (let i = 0; i < shizi.length; i++) {
        Stack.push(shizi[i]);
    }
    let res = '。';
    Stack.dataStore.forEach((ele, index) => {
        if (ele == res) return index;
    });
}
math(shizi);