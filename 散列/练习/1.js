class HashTable {
    constructor(length = 10) {
        this.table = [length];
    }
    simpleHash(data) {
        let temp = 0, str = data + '';
        for (let i = 0; i < str.length; i++) {
            temp += str.charCodeAt(i);
        }
        return temp % str.length;
    }
    showDistro() {

    }
    put(data) {
        let pos = this.simpleHash(data);
        this.table[pos] = data;
    }
    get() {

    }
}