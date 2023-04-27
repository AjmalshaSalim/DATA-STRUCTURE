class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    Head(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    Tail(value){
        let node =new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    delMid(){
        let count=0;
        let current=this.head;
        let x=this.size/2;
        let temp;
        while(current){
            count++;
            if(count===x){
               temp=current; 
               temp.next=temp.next.next;
               break;
            }
            current=current.next;
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next; 
        }
        
    }
    
}
let ll=new list();
ll.Head(888);
ll.Tail(777);
ll.Tail(666);
ll.Tail(555);
ll.delMid();
ll.print();