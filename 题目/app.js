// const matrix = [
//         [1, 5, 3],
//         [3, 4, 5],
//         [3, 6, 5],
//         [5, 6, 7],
//         [8, 6, 7]
//     ],
//     lines = [
//         [2, 0, 0, 1, 2],
//         [1, 2, 2, 1, 0],
//         [0, 1, 1, 2, 0]
//     ],
//     rewards = [{
//             elem: 3,
//             num: 3,
//             reward: 2
//         }, {
//             elem: 3,
//             num: 4,
//             reward: 5
//         }, {
//             elem: 3,
//             num: 5,
//             reward: 7
//         },
//         {
//             elem: 5,
//             num: 3,
//             reward: 3
//         }, {
//             elem: 5,
//             num: 4,
//             reward: 6
//         }, {
//             elem: 5,
//             num: 5,
//             reward: 8
//         }
//     ];

const matrix = [
        [1, 5, 3],
        [3, 4, 5],
        [3, 6, 5],
        [5, 6, 7],
        [8, 6, 7]
    ],
    lines = [
        [0, 1, 2, 2, 0],
        [1, 2, 0, 1, 2]
    ],
    rewards = [{
            elem: 3,
            num: 3,
            reward: 2
        }, {
            elem: 3,
            num: 4,
            reward: 5
        }, {
            elem: 3,
            num: 5,
            reward: 7
        },
        {
            elem: 5,
            num: 3,
            reward: 3
        }, {
            elem: 5,
            num: 4,
            reward: 6
        }, {
            elem: 5,
            num: 5,
            reward: 8
        }
    ];

function calc(matrix, lines, rewards) {
    let rsour = [],
        resObj = {
            lineId: 0,
            elem: 0,
            num: 0,
            reward: 0
        },
        line_res = [],
        counst = 0;
    //得到线数据 
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            line_res.push(matrix[j][lines[i][j]]);
        }

        resObj.lineId = i;
        line_res.forEach((ele, index) => {
            if (ele == line_res[index + 1]) {
                counst++;
                resObj.elem = ele;
                resObj.num = counst + 1;
            }
        });

        rewards.forEach(ele => {
            if (ele.elem == resObj.elem && ele.num == resObj.num) {
                resObj.reward = ele.reward;
            }
        });

        rsour.push(resObj);

        line_res = [];

        resObj = {
            lineId: 0,
            elem: 0,
            num: 0,
            reward: 0
        }
    }
    return rsour;
}

console.log(calc(matrix, lines, rewards));