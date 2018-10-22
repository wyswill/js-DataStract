/**
 * 二叉树喝二叉查找树
 */
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}
class bst {
    constructor(data = null) {
        this.root = data;
    }
    insert(data) {
        let n = new Node(data, null, null);//创建一个节点
        if (this.root == null) this.root = n;//如果根节点为空的话，该节点就是根节点
        else {
            let current = this.root,
                parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    /**
     * 中序遍历
     * @param {ndoe} node 要查找的节点
     * @description 查找过程不是在一个方法中进行的，是一个这个树的结构的方法树
     */
    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.show() + "");
            this.inOrder(node.right);
        }
    }
    // 先序遍历
    preOrder(node) {
        if (node != null) {
            console.log(node.show() + '');
            this.inOrder(node.left);
            this.inOrder(node.right);
        }
    }
    postOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            this.inOrder(node.right);
            console.log(node.show() + '');
        }
    }
    /**
  * 在二叉查找树上进行查找
 
 寻找最小值 */
    findMin() {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.show();
    }
    // 找到最大值
    findMax() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.show();
    }
    // 寻找特定值
    findSome(value) {
        let current = this.root;
        while (current != null) {
            if (current.data == value) {
                return current;
            } else if (value < current.data) {
                current = current.left;
            } else if (value > current.data) {
                current = current.right;
            }
        }
        return null;
    }
    /**
     * 从二叉查找树上删除节点
     */
    deletNode(node) {

    }


}

let nums = new bst();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

/*
前序遍历
nums.preOrder(nums.root);
23 3 16 22 37 45 99
中序遍历
nums.inOrder(nums.root);
3 16 22 23 37 45 99
后序遍历
nums.postOrder(nums.root);
2 16 22 37 45 99 23
 */
