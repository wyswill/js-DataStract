/**
 * 练习 2
 * 
 * 使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。该程
   序显示每个单词出现的次数，但每个单词只显示一次。
 */
const { Dictionary } = require('../练习/1'),
    d = new Dictionary(),
    word = 'the brown fox jumped over the blue fox',
    temp = word.split(' ');
function wordSplic() {
    for (let i = 0; i < temp.length; i++) {
        let count = 0;
        for (let j = 0; j < temp.length; j++) {
            if (temp[i] == temp[j]) {
                count++;
                d.add(temp[i], count);
            }
        }
    }
    d.showAll();
}
// wordSplic();
/*
    the  2
    brown  1
    fox  2
    jumped  1
    over  1
    blue  1
*/ 
/**
 * 练习 3
 * 修改练习 2，使单词按字母顺序显示。
 */
function wordSort() {
    for (let i = 0; i < temp.length; i++) {
        d.add(temp[i], i);
    }
    d.sort();
}
// wordSort();
/*
    blue
    brown
    fox
    jumped
    over
    the
*/



