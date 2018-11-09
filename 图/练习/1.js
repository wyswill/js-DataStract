/**
 * @class Graph
 * @description 图类
 */
class Graph {
    constructor(v = 10) {
        this.vertices = v;
        this.edges = 0;//边
        this.adj = [];
        // 创建矩阵
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = new Array('');
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    toString() {
        for (var i = 0; i < this.vertices; ++i) {
            console.log(i + "->");
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) console.log(this.adj[i][j] + ' ' + '\n');
            }
        }
    }

    showAdj() {
        for (let i = 0; i < this.adj.length; i++) {
            for (let j = 0; j < this.adj[i].length; j++) {
                console.log(j);
            }
            console.log('\n');
        }
    }

}










