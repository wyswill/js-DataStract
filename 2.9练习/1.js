/**
 * 1. 创建一个记录学生成绩的对象，
 *    提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
 */
// list = [];
// class Record {
//     /**
//      * 添加成绩的方法
//      * @param {string} student 要添加成绩的学生
//      * @param {number} number 要添加的成绩
//      */
//     add(student, number) {
//         let data = {
//             student: student,
//             number: number
//         }
//         list.push(JSON.stringify(data));
//     }
//     show() {
//         let cj = 0;
//         list.forEach(element => {
//             let s = JSON.parse(element);
//             cj += s.number;
//         });
//         let res = cj / list.length;
//         console.log(`学生平均成绩为${res},总成绩为${cj}`);
//     }
// }
// let s = new Record();
// s.add('Abelardo', 123);
// s.add('Funk', 12);
// s.add('Shanon', 21);
// s.add('Alison', 123);
// s.show();
/**
 * 将一组单词存储在一个数组中， 并按正序和倒序分别显示这些单词。
 */

// let words = ['Hildaborough', 'Alessiafurt', 'South', 'Carrollside', 'South Gudrunbury'];
// console.log(`倒叙排列 ${words.reverse()}`);
// console.log(`正序排列 ${words.sort()}`);

/**
 * 创建这样一个对象， 它将字母存储在一个数组中， 并且用一个方法可以将字母连在一
   起， 显示成一个单词。
 */
// class words {
//     constructor(...arrs) {
//         this.list = [];
//         this.insert_word(arrs);
//     }
//     insert_word(char, ...chars) {
//         if (char != null) {
//             char.forEach(element => {
//                 this.list.push(element);
//             });
//         } else {
//             chars.forEach(element => {
//                 this.list.push(element);
//             });
//         }
//     }
//     get_words() {
//         let word = '';
//         this.list.forEach(element => {
//             word += element;
//         });
//         console.log(word);
//     }
// }