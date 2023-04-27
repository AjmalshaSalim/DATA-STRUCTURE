class Node {
    constructor(value) {
        this.value = value;
        this.next =null;
    }
}
class list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addHead(value) {
        let node = new Node(value);
           if(!this.head){
            this.head=node;
            this.tail=node;
           }else{
            node.next=this.head;
            this.head=node;
           }
           this.size++;
    }
     add(value) {
         let node = new Node(value);
        if (!this.head) {
             this.head = node;
             this.tail = node;
         } else {
             let current = this.tail;
             current.next=node;
             this.tail=node;
             }
             this.size++;
         }
         print(){
            let current=this.head;
            while(current){
                console.log(current.value);
                current=current.next;
            }
         }
         sizeOf(){
        console.log("Size of Linked List: "+this.size)
         }
     }
let ll = new list();
ll.addHead(5);
ll.addHead(6);
ll.addHead(7);
ll.addHead(8);
ll.addHead(9);
ll.add(4);
ll.add(3);
ll.add(2);
ll.add(1);
console.log(ll);
ll.print();
ll.sizeOf();