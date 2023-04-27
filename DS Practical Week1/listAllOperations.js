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
    addhead(value){
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
    addTail(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            let current=this.tail;
            current.next=node;
            this.tail=node;
        }
        this.size++;
    }




    delete(value){
let current=this.head;
while(current.next.value!=value){
current=current.next;
}
current.next=current.next.next;

    }

    print2(){
        let current=this.head;
        let skip=0;
        while(current){
            if(skip>2){
                skip=0;
            }
            if(skip==0){ 
            console.log(current.value);
            }
            current=current.next;
            skip++;
        }

    }



    findMid(){
        let slow=this.head;
        let fast=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next
        }
        
        //slow.value=value;
        console.log("mid : "+slow.value);
    }





    secondLast(){
        let current=this.head;
        while(current.next!=this.tail){
current=current.next;
        }
        console.log(current.value);
    }





    findThirdLast(){
        let current=this.head;
        let prev;
        while(current.next.next!=this.tail){
            current=current.next;
        }
        console.log(current.value);
    }





    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next; 
        }
    }

}
let ll=new list();
ll.addhead(222);
ll.addTail(333);
ll.addTail(444);
ll.addTail(555);
ll.addTail(666);
ll.addTail(777);
ll.addTail(888);
//ll.delete(555);
// ll.delete(444);
// ll.findMid(456);
// ll.secondLast();
 ll.findThirdLast();
//ll.print();
//ll.print2();