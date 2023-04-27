class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    add(value){
        let node=new Node(value);
if(!this.head){
    this.head=node;
    this.tail=node;
}else{
    let current=this.tail;
    current.next=node;
    this.tail=node;
    node.prev=current;
}
this.size++;
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current?.next?.next?.next;
            
        }
    }
}
let ll=new list();
ll.add(111);
ll.add(222);
ll.add(333);
ll.add(444);
ll.add(555);
ll.add(666);
ll.add(777);
ll.add(888);
ll.print();