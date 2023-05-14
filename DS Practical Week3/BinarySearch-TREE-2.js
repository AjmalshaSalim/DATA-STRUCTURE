//Binary Search Tree All Workouts---------------------------------------------------------------------------

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //-----------------------------------------------------------------------------------------------------------
    //Inserton-----------------------------------------------------------------------------------------------

    add(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        return;
                    } else {
                        current = current.right;
                    }
                } else {
                    if (!current.left) {
                        current.left = node;
                        return;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }
    //-----------------------------------------------------------------------------------------------------------
    //Search-------------------------------------------------------------------------------------------------

    search(target) {
        let current = this.root;
        if (!current) {
            return console.log("empty");
        } else {
            while (current) {
                if (current.value == target) {
                    return console.log("found");
                } else if (target > current.value) {
                    current = current.right;
                } else {
                    current = current.left;
                }
            }
            return console.log("not found");
        }
    }
    //-----------------------------------------------------------------------------------------------------------
    //print Postorder----------------------------------------------------------------------------------------

    PostOrderPrint() {
        let current = this.root;
        this.Posthelper(current);
    }
    Posthelper(current) {
        if (current) {
            this.Posthelper(current.left);
            this.Posthelper(current.right);
            console.log(current.value);
        }
    }


    //------------------------------------------------------------------------------------------------------------
    //Print Preorder------------------------------------------------------------------------------------------

preOrderPrint(){
let current=this.root;
this.PreHelper(current);
}
PreHelper(current){
    if(current){
        console.log(current.value);
        this.PreHelper(current.left);
        this.PreHelper(current.right);
    }
}


    //------------------------------------------------------------------------------------------------------------
    //Print Inorder------------------------------------------------------------------------------------------

InOrderPrint(){
    let current=this.root;
    this.InHelper(current);
}
InHelper(current){
if(current){
    this.InHelper(current.left);
    console.log(current.value);
    this.InHelper(current.right);
}
}
}

let tree = new BinarySearchTree();
tree.add(20);
tree.add(10);
tree.add(40);
tree.add(5);
tree.add(15);
tree.add(30);
tree.add(50);
//console.log(tree);
//tree.search(40);
//tree.PostOrderPrint();
//tree.preOrderPrint();
tree.InOrderPrint();
