class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
/**
 * 链表对象
 * 
 */
class LinkedList {
    /**
     * 构造函数
     * @param {any} value 创建头结点
     */
    constructor(value = 'head') {
        this.head = new Node(value);
    }
    /**
     * 查找包含item的节点
     * @param {any} element 要查找的值
     */
    find(element) {
        let currNode = this.head;
        while (currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * 插入元素到节点中 
     * @param {any} item  要插入的节点
     * @param {any} newElement 要插入的元素
     */
    insert(item, newElement) {
        let newNode = new Node(newElement),
            current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    /**
     * 删除节点
     * @param {any} item 要删除的节点
     */
    remove(item) {
        let preNode = this.findPrevious(item);
        if (!(preNode.next == null)) {
            preNode.next = preNode.next.next;
        }
    }
    /**
     * 
     * @param {any} item 找到要删除的节点的前一个节点 
     */
    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * 展示链表中所有的值 
     */
    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}