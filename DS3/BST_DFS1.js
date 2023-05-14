class Node{
    constructor(data){
        this.data=data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(data){
        const node = new Node(data);

        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }

    }

    insertNode(root, node){
        if(node.data > root.data){
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right, node);
            }
        }else{
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left , node)
            }
        }
    }

    preOrder(root){

        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){

        if(root){
            
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

}

const bst = new BinarySearchTree();

bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(10);
bst.insert(5);
bst.insert(50);
bst.insert(15);


console.log(bst);

console.log("InOrder: \n");
bst.inOrder(bst.root);
console.log("PreOrder: \n");
bst.preOrder(bst.root);
console.log("Post Order: \n");
bst.postOrder(bst.root);