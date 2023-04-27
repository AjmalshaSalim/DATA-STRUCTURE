class Queue{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(value){
        let queue=new Queue(value);
        if(!this.head){
            this.head=queue;
            this.tail=queue;
        }else{
            this.tail.next=queue;
            this.tail=queue;
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
let Q=new list();
Q.add(444);
Q.add(555);
Q.add(666);
Q.add(777);
Q.add(888);
Q.add(999);
Q.print();