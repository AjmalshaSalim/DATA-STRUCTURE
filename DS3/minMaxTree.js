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

    min(root){
        if(!root.left){
            return root.data;
        }else{
           return this.min(root.left);
        }

    }

    max(root){
        if(!root.right){
            return root.data
        }else{
           return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value);
    }

    deleteNode(root,value){
        if(root === null){
            return root;
        }
        if(value<root.data){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.data){
            root.right = this.deleteNode(root.right , value);
        }else{
            if(!root.left &&  !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right , root.data)
        }
        return root;
    }

}

const bst = new BinarySearchTree();

bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(10);

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

console.log(bst);

bst.delete(40);
console.log(bst);
