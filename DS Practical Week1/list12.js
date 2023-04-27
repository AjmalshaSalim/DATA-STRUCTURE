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
            let curr=this.tail;
            curr.next=node;
            node.prev=curr
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
    search(value){
        let temp=this.head;
        let count=0;
        while(temp){
            count++;
        if(temp.value==value){
            console.log("found value at position  "+count)
            return;
        }
        temp=temp.next;
        }
        console.log("not found");

    }
     delete(value){
         let curr=this.head;
         while(curr.value!=value&&curr!=null){
                curr=curr.next;
             }
             let prev=curr.prev;
             let next=curr.next;
             prev.next=next;
             next.prev=prev;


     }
}
let ll=new list();
ll.add(444);
ll.add(333);
ll.add(666);
ll.add(555);
ll.add(777);
ll.delete(333);
ll.print()
console.log(ll);
