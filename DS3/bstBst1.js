class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right= null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root =null;
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
        if(node.data < root.data){

            if(root.left === null){
                root.left= node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }

    levelOrder(){

        const queue = [];
        queue.push(this.root);

        while(queue.length){
            let curr = queue.shift();
            console.log(curr.data);

            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}


const bst = new BinarySearchTree();

bst.insert(10) //root
bst.insert(20)
bst.insert(30)
bst.insert(5)

console.log(bst);

bst.levelOrder();
