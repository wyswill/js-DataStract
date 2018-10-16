/**
 * 6.7 练习6
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LoopList {
    constructor(element = 'head') {
        this.head = new Node(element);
        this.head.next = this.head;
        this.length = 0;
    }
    findNode(node) {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != 'head') {
            currNode = currNode.next;
        }
        return currNode;
    }
    insertNode(node, element) {
        let newNode = new Node(element),
            currNode = this.findNode(node);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
    }
    showList() {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != 'head') {
            console.log(`第${currNode.next.element}个士兵存活`);
            currNode = currNode.next;
        }
    }
    testInsert(l) {
        l.insertNode('head', 1);
        for (let i = 1; i < 40; i++) {
            l.insertNode(i, i + 1);
        }
    }
    deletNode(node) {
        let currNode = node,
            preNode = this.findPreNode(node.element);
        if (currNode != null) {
            preNode.next = currNode.next;
        }
        currNode = null;
        this.length--;
    }
    findPreNode(node) {
        let currNode = this.head;
        while (currNode != null && currNode.next.element != node && currNode.next.element != 'head') {
            currNode = currNode.next;
        }
        return currNode;
    }
    killMen(listObj) {
        let currNode = this.head;
        for (let i = 0; i < 3; i++) {
            currNode = currNode.next;
        }
        listObj.deletNode(currNode);
        console.log(`第${currNode.element}个士兵被杀了`);
        if (!(listObj.length < 3)) {
            listObj.killMen(listObj);
        }
    }
}
let l = new LoopList();