// class Node{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(data){
//         const node = new Node(data);
//         if(!this.root ){
//             this.root = node;
//         }else{
//             this.insertNode(this.root, node);
//         }
//     }

//     insertNode(root,node){
//         if(node.data < root.data){
//             if(!root.left){
//                 root.left = node;
//             }else{
//                 this.insertNode(root.left, node);
//             }
//         }else{
//             if(!root.right){
//                 root.right = node;
//             }else{
//                 this.insertNode(root.right,node);
//             }
//         }
//     }

//     search(data){
//         let curr = this.root;
//         while (curr){
//             if(!curr){
//                 return false;
//             }else if(curr.data === data){
//                 return true;
//             }else if(data < curr.data){
//                 curr = curr.left;
//             }else{
//                 curr=curr.right;
//             }
//         } 
//         return false;
//     }

//     levelOrder(){
//         class QueueNode{
//             constructor(value){
//                 this.value=value;
//                 this.next = null;
//             }
//         }

//         class Queue{
//             constructor(){
//                 this.front = null;
//                 this.rear = null;
//             }

//             isEmpty(){
//                 if( this.front === null || this.rear === null ){
//                     return 1;
//                 }else{
//                     return 0;
//                 }
//             }

//             enqueue(value){
//                 const queuenode = new QueueNode(value);
//                 if( this.isEmpty() ){
//                     this.front= queuenode;
//                     this.rear=queuenode;
            
//                 }else{
//                     this.rear.next=queuenode;
//                     this.rear = queuenode;
//                 }            
//             }

//             dequeue(){
//                 if( this.isEmpty() ){
//                     return -1;
//                 }else{
//                     let current = this.front;
//                     this.front  = this.front.next;
//                     return current;
//                 }
//             }

//         }

//         const q = new Queue();

//         q.enqueue(this.root);
//         // console.log(q.dequeue())

//         while(q.isEmpty()==0){
//             let current = q.dequeue();
//             console.log(current.value.data);

//             if(current.value.left){
//                 q.enqueue(current.value.left);
//             }
//             if(current.value.right){
//                 q.enqueue(current.value.right);
//             }
//         }
        

//         }

//     }




// const bst = new  BinarySearchTree();

// bst.insert(23);
// bst.insert(18);
// bst.insert(62);
// bst.insert(51);
// bst.insert(32);
// bst.insert(20);
// bst.insert(15);

// // console.log(bst);

// // console.log(bst.search(62));
// // console.log(bst.search(52));
// // console.log(bst.search(32));

// bst.levelOrder();



// class BinaryHeap{
//     constructor(){
//         this.array = []
//     }

//     bubbleUp(){
//         let lastIndex = this.array.length -1;
//         let element = this.array[lastIndex];

//         while(lastIndex > 0){
//             let parentIndex = Math.floor((lastIndex -1)/2)
//             let parentElement = this.array[parentIndex];

//             if(element < parentElement){}
        
//     }}

//     insert(value){
//         this.array.push(value);

//     }
// }

class BinaryHeap {
    constructor() {
        this.array = []
    }

    insert(value) {
        this.array.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let lastIndex = this.array.length - 1;
        let element = this.array[lastIndex];

        while (lastIndex > 0) {
            let parentIndex = Math.floor((lastIndex - 1) / 2);
            let parentElement = this.array[parentIndex];

            if (element < parentElement) {
                break
            } else {
                this.array[lastIndex] = parentElement;
                this.array[parentIndex] = element;
                lastIndex = parentIndex;
            }
        }
    }

    remove() {
        let max  = this.array[0];
        let last = this.array.pop()

        if (this.array.length > 0) {
            this.array[0] = last	
            this.hepify()
        }
        return max
    }

    hepify() {
        let index = 0;
        let element = this.array[0];
        let length = this.array.length

        while (true) {
            let leftChildeIndex = 2 * index + 1
            let rightChildeIndex = 2 * index + 2
            let leftchild, rightchild;
            let swap = null;

            if (leftChildeIndex < length) {
                leftchild = this.array[leftChildeIndex];
                if (leftchild > element) {
                    swap = leftChildeIndex
                }
            }

            if (rightChildeIndex < length) {
                rightchild = this.array[rightChildeIndex];
                if ((swap == null && rightchild > element) || (swap !== null && rightchild > leftchild)) {
                    swap = rightChildeIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.array[index] = this.array[swap];
            this.array[swap] = element
            index = swap
        }
    }
}




const one = new BinaryHeap();
one. insert(1)
one. insert(20)
one. insert(3)
one. insert(4)
console.log(one);