/* 双向链表 */
class Node {
    constructor(element) {
        this.pre = null;
        this.element = element;
        this.next = null;
    }
}

class doubleList {
    constructor(element = 'head') {
        this.head = new Node(element);
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
            console.log(`${node} 节点已经删除`);
        }
    }
    /**
     * 找到最后一个节点
     */
    findLastNode() {
        let currNode = this.head;
        while (currNode.next != null) {
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
        while (currNode != null && currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}