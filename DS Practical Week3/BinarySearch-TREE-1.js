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
    //======================================================================================================
    Insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (value > current.value) {
                    if (current.right == null) {
                        current.right = node;
                        return;
                    } else {
                        current = current.right;
                    }
                } else {
                    if (current.left == null) {
                        current.left = node;
                        return;
                    } else {
                        current = current.left;
                    } }
            } } }
    //================================================================================================================

    search(value) {
        let current = this.root;
        if (current == null) {
            return false;
        }
        while (current) {
            if (value == current.value) {
                return true;
            }
            else if (current.value < value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
    }
    //===============================================================================================================

    printInOrder(){
        let current=this.root;
        this.helperInOrder(current);
    }
    helperInOrder(current){
        if(current){
            this.helperInOrder(current.left);
            console.log(current.value);
            this.helperInOrder(current.right);
        }
    }
    //===============================================================================================================
    //Delete Target
    delete(target) {
        let current = this.root;
        this.Helper(target, current, null)
    }
    //Helper function
    Helper(target, current, parent) {
        while (current) {
            if (current.value > target) {
                parent = current;
                current = current.left;
            } else if (current.value < target) {
                parent = current;
                current = current.right;
            } else {
                if (current.right != null & current.left != null) {
                
                     let minValue = this.getminValue(current.right);
                    current.value = minValue;
                    this.Helper(minValue, current.right, current)
                } else {
                    if (parent === null) {
                        if (current.right == null) { 
                            this.root = current.left;
                        } else {
                            this.root = current.right;  }
                    } else {
                        if (parent.right == current) {
                            if (current.right == null) {
                                parent.right = current.left;
                            } else { parent.right = current.right;
                            }
                        } else {
                            if (current.right == null) {
                                parent.left = current.left;
                            } else {
                                parent.left = current.right;
                            }}}
                    return;
                }
            }}}
    //=======================================================================================================
    getMinValue(current) {
        if (current.left == null) {
            return current.value
        }
        return this.getMinValue(current.left);
    }
    
}
let tree = new BinarySearchTree();
tree.Insert(5);
tree.Insert(11);
tree.Insert(2);
tree.Insert(7);
tree.Insert(3);
tree.Insert(6);
tree.Insert(1);
tree.Insert(9);
// console.log(tree.search(11));
// console.log(tree);
tree.delete(7);
tree.printInOrder();
