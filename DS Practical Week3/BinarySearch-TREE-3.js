class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    Insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (current.value > value) {
                    if (!current.left) {
                        current.left = node;
                        return;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = node;
                        return;
                    } else {
                        current = current.right;
                    }
                }

            }
        }
    }


    Search(target) {
        let current = this.root;
        while (current) {
            if (target == current.value) {
                console.log("found");
                return;
            } else {
                if (current.value > target) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
    }

    InOrderPrint() {
        let current = this.root;
        this.orderHelper(current);
    }
    orderHelper(current) {
        if (current) {
            this.orderHelper(current.left);
            console.log(current.value);
            this.orderHelper(current.right);
        }
    }
}
let tree = new BinarySearchTree();
tree.Insert(555);
tree.Insert(777);
tree.Insert(333);
tree.Insert(666);
tree.Insert(444);
//console.log(tree);
//tree.InOrderPrint();
tree.Search(666);