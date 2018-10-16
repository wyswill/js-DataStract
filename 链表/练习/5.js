class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
/**
 * 6.7 练习
 * 使用单向链表写一段程序，记录用户输入的一组测验成绩
 */
class linkLis {
    constructor(element = 'head') {
        this.head = new Node(element);
    }
    find(node) {
        let currNode = this.head;
        while (currNode.element != node) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(node, elementObj, cj) {
        let currNode = this.find(node),
            newNode = new Node(elementObj);
            newNode.test = cj;
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
    deletNode(node) {
        let currNode = this.find(node),
            preNdoe = this.findPreNode(node);
        preNdoe.next = currNode.next;
        currNode = null;
    }
    findPreNode(node) {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != node) {
            currNode = currNode.next;
        }
        return currNode;
    }
    showNodeElement() {
        let currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}