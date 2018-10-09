/**
 * 5.3　使用队列：方块舞的舞伴分配问题
 */
let people =
    ` F Allison McMillan
  M Frank Opitz
  M Mason McMillan
  M Clayton Ruff
  F Cheryl Ferenback
  M Raymond Williams
  F Jennifer Ingram
  M Bryan Frazer
  M David Durr
  M Danny Martin
  F Aurora Adney`;

class Dancer {
    /**
     * 舞者
     * @param {string} name 舞者姓名 
     * @param {string} sex 舞者性别 
     */
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

function getDancers(males, females) {
    let names = people.split('\n');
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }
    for (let i = 0; i < names.length; i++) {
        let dancer = names[i].split(' '),
            sex = dancer[0],
            name = dancer[1];
        if (sex == "F")
            females.enqueue(new Dancer(name.sex));
        else
            males.enqueue(new Dancer(name, sex));
    }
}