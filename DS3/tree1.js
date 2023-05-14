class Node{
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root == null
    }

    insert(data){
        const node = new Node(data);

        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }

    }

    insertNode(root, node){
        if(node.data < root.data){

                if(root.left === null){
                    root.left = node;
                }else{
                    this.insertNode(root.left, node);
                }

        }else{

            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node);
            }

        }

    }

    search(root, data){
        if(!root){
            return false;
        }else{
            if(root.data === data){
                return true;
            }else if(data < root.data){
                return this.search(root.left,data);
            }else{
                return this.search(root.right,data);
            }

            }
        }
        
}

const bst= new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(10);

console.log(bst);

console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,9));
console.log(bst.search(bst.root,2));