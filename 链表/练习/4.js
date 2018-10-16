/* 双向循环链表 */
class Node {
    constructor(element) {
        this.pre = null;
        this.element = element;
        this.next = null;
    }
}

class doubleLoopList {
    constructor(element = 'head') {
        this.head = new Node(element);
        this.head.next = this.head;
        this.length = 0;
    }
    /**
     * 查找节点
     * @param {node} node 要查找的节点
     */
    find(node) {
        let currNode = this.head;
        while (currNode.element != node) {
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * 插入节点
     * @param {node} node 要插入的元素
     * @param {any} element 要插入的元素
     */
    insert(node, element) {
        let newNode = new Node(element),
            currNode = this.find(node);
        newNode.next = currNode.next;
        newNode.pre = currNode;
        currNode.next = newNode;
        this.length++;
        console.log(`插入成功！插入元素为:${element}`);
    }
    /**
     * 删除节点
     * @param {node} node 要删除的节点
     */
    deletNode(node) {
        let currNode = this.find(node);
        if (currNode.next != null) {
            //将节点删除
            currNode.next.pre = currNode.pre;
            currNode.pre.next = currNode.next;
            //清空要删除的节点
            currNode.pre = null;
            currNode.next = null;
            this.length--;
            console.log(`${node} 节点已经删除`);
        }
    }
    /**
     * 找到最后一个节点
     */
    findLastNode() {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != 'head') {
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * 倒序输出链表元素
     * @private {node} lastNode 链表中最后一个元素
     */
    dispReverse() {
        let lastNode = this.findLastNode();
        while (lastNode.pre != null) {
            console.log(lastNode.element);
            lastNode = lastNode.pre;
        }
    }
    /**
     * 展示双链表中的元素
     */
    showNode() {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != 'head') {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    /**
     * 在链表中向前移动 n 个节点。
     * @param {node} node 要移动的节点
     * @param {number} length 要移动的长度
     */
    advance(node, length) {
        if (length >= this.length) return `长度超过链表长度`;
        let currNode = this.find(node), temp = this.find(node);
        for (let i = 0; i < length; i++) {
            temp = temp.pre;
        }
        if (currNode.next.element == 'head') {
            temp.next = temp.next;
            currNode.pre.next = currNode.next;
        } else {
            temp.next = currNode.next;
        }
        currNode.pre = temp.pre;
        currNode.next = temp;
        temp.pre.next = currNode;
        temp.pre = currNode;
    }
    back(node, length) {
        if (length >= this.length) return `长度超过链表长度`;
        let currNode = this.find(node), temp = this.find(node);
        if (currNode.next.element == 'head') return `该元素是尾元素，无法移动`;
        for (let i = 0; i < length; i++) {
            temp = temp.next;
        }
        currNode.pre.next = currNode.next;
        currNode.next.pre = currNode.pre;

        currNode.next = temp.next;
        currNode.pre = temp;
        temp.next = currNode;
    }
}