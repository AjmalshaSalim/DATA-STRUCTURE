class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.tail;
            curr.next = node;
            this.head = node;
        }
        this.size++;
    }
    insertArray(array) {
        for(let i=0;i<array.length;i++){
            let node=new Node(array[i])
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

    }
    deleteInd(index){
let count=1;
let current;
let temp=this.head;
while(temp){
    count++;
 if(!temp){
    return console.log("Error");
 }
 if(count==index){
    current=temp;
    current.next=current.next.next;
 }
 temp=temp.next;
}
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next;
        }
    }
}
let array=[666,999,555,333,444];
let ll=new list();
ll.insertArray(array);
ll.deleteInd(3);
ll.print();
