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

    levelOrder(){
        class QNode{
            constructor(value){
                this.value = value;
                this.next = null;
            }
        }

        class Queue{
            constructor(){
                this.front = null;
                this.rear = null;
            }
            empty(){
                if(this.front === null)
                return 1;
                else return 0;
            }
            enqueue(data){
                const qnode = new QNode(data);

                if(this.empty()){
                    this.rear = qnode;
                    this.front = qnode;
                }else{
                    this.rear.next = qnode;
                    this.rear = qnode;
                }
            }
            dequeue(){

                if(this.front){
                    let current = this.front;
                    this.front = this.front.next;
                    return current;
                }else{
                    return null;
                }
            }

        }

        const q = new Queue();
        q.enqueue(this.root);
        
        while(q.empty()===0){

            let current = q.dequeue();
            console.log(current.value.data);

            if(current.value.left){
                q.enqueue(current.value.left)
            }
            if(current.value.right){
                q.enqueue(current.value.right)
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

bst.levelOrder();

bst.delete(30);
console.log("----------------------------");
bst.levelOrder();

// console.log(bst);
