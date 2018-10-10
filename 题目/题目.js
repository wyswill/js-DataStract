/**
 *
 * Author:
 * Date:
 */

'use strict';

/**
 * 计算矩阵中指定线的奖励额度
 * @param matrix 矩阵数据 格式为 5 * 3 的矩阵，矩阵内元素不定
 *                eg：[[1, 5, 3], [3, 4, 5], [3, 6, 5], [5, 6, 7], [8, 6, 7]]
 *                对应矩阵为    3 5 5 7 7
 *                             5 4 6 6 6
 *                             1 3 3 5 8
 * @param lines 线数据，每条线的长度为 5，线的数量不固定
 *                eg：[[0, 1, 2, 2, 0], [1, 2, 0, 1, 2]]
 *                则 [0, 1, 2, 2, 0] 对应的元素为 [1, 4, 5, 7, 8]
 *                [1, 2, 0, 1, 2] 对应的元素为 [5, 5, 3, 6, 7]
 * @param rewards 奖励数据，包含元素 id，元素个数和对应的奖励。
 *                eg: [
 *                {elem: 3, num: 3, reward: 2}, {elem: 3, num: 4, reward: 5}, {elem: 3, num: 5, reward: 7},
 *                {elem: 5, num: 3, reward: 3}, {elem: 5, num: 4, reward: 6}, {elem: 5, num: 5, reward: 8}
 *                ]
 * @return 数组，返回矩阵中符合线和奖励数据的中奖结果 eg: [{lineId: 0, elem: 0, num: 0, reward: 0}]
 */
function calc(matrix, lines, rewards) { }

/*
例如:
矩阵数据: [[1, 5, 3], [3, 4, 5], [3, 6, 5], [5, 6, 7], [8, 6, 7]]
对应矩阵为   3 5 5 7 7
             5 4 6 6 6
             1 3 3 5 8

线数据: [[2, 0, 0, 1, 2], [1, 2, 2, 1, 0], [0, 1, 1, 2, 0]]

奖励数据: [{elem: 3, num: 3, reward: 2}, {elem: 3, num: 4, reward: 5}, {elem: 3, num: 5, reward: 7},
           {elem: 5, num: 3, reward: 3}, {elem: 5, num: 4, reward: 6}, {elem: 5, num: 5, reward: 8}]

返回值: [{lineId: 0, elem: 3, num: 3, reward: 2}, {lineId: 1, elem: 5, num: 3, reward: 3}]
*/
