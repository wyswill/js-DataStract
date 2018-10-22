class HashTable {
    constructor(length = 137) {
        this.table = new Array(length);
    }
    simpleHash(data) {
        let total = 0, str = data + '';
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    betterHash(string) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    showDistro() {
        this.table.forEach((ele, index) => {
            console.log(`${index}: ${ele}`);
        });
    }
    put(data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }
    get() {

    }
}