// let a = [12, 3, 4, 5, 6, 123],
//     num = [];
// for (let i = 0; i < a.length; i++) {
//     num[i] = a[i];
// }
// a.unshift(21);
// console.log(a);

// var nums = [1, 2, 3, 7, 8, 9];
// var newElements = [4, 5, 6];
// nums.splice(3, 0, newElements);
// console.log(nums); //[1, 2, 3, Array(3), 7, 8, 9] 在下标3的地方插入的不是一串数据，而是一个数组

// var nums = [1, 2, 3, 7, 8, 9];
// nums.splice(3, 0, 4, 5, 6);
// console.log(nums); //[1, 2, 3, 4, 5, 6, 7, 8, 9] 插入的不是整个数组而是元素序列的话就会根据要插入的下标吧数据插入进去



/**
 * @param {number} num 是forEach的第一个参数，也就是element
 * @param {number} num2 是第二个元素也就是index
 */
// function square(num,num2) {
//     console.log(`num ${num} num2 ${num2}`);
// }
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums.forEach(square);



/**
 * 
 * @param {number} num1 第一个数
 * @param {number} num2 第二个数
 */
// function compare(num1, num2) {
//     return num1 - num2;
// }
// var nums = [3, 1, 2, 100, 4, 200];
// nums.sort(compare);