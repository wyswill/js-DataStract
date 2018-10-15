/**
 * 链表练习
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    constructor(element = 'head') {
        this.head = new Node(element);
    }
    /**
     * 查找元素
     * @param {any} element 要查询的元素
     * @return {Node} currNode 不包含传入元素的节点
     * 从头结点开始遍历，如果当前节点的元素不等于传入的参数则currNode等于下一个节点
     */
    find(element) {
        let currNode = this.head;
        while (currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * 插入节点
     * @param {any} node 要插入的节点
     * @param {any} element 要插入的元素
     */
    insert(node, element) {
        let newNode = new Node(element), //创建要插入的节点
            temp = this.find(node);
        newNode.next = node.next;
        temp.next = newNode;
    }

    removeNode(node) {
        let preNode = this.findPreNode(node);
        // 判断是不是尾节点
        if (preNode.next != null) {
            preNode.next = preNode.next.next;
        }
        console.log(`${node}节点已经删除`);
    }

    findPreNode(node) {
        let currNode = this.head;
        //     判断是否是尾节点，      判断当前节点的下一个节点是不是要查询的节点
        while (currNode.next != null && currNode.next.element != node) {
            currNode = currNode.next;
        }
        return currNode;
    }
    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}