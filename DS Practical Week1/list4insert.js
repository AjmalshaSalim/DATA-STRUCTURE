class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            let temp=this.tail;
            temp.next=node;
            this.tail=node;
        }
        this.size++;
    }

    Insert(value, prev, next) {
        const node = new Node(value);
        let prevNode = null;
        let nextNode = null;

        let current = this.head;
        while (current) {
            if (current.value === prev) {
                prevNode = current;
            } else if (current.value === next) {
                nextNode = current;
                break;
            }
            current = current.next;
        }

        if (prevNode && nextNode) {
            prevNode.next = node;
            node.next = nextNode;
        } else {
            console.log("Error");
        }
    }
    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }
    }
    delete(input){
        let temp=this.head;
        let previous;

        if(temp.value===input){
            
            this.head=temp.next;
            this.size--;
            return;

        }

        while(temp.value!=input&&temp!=null){
            previous=temp;
            temp=temp.next;
            
        }
        // let next = temp.next;
        previous.next=temp.next;
        temp=null;
        this.size--;

    }
}

// Example usage:
const list = new LinkedList();
list.Tail(1);
list.Tail(2);
list.Tail(4);

console.log("Before inserting:");
console.log(list); 

list.Insert(3, 2, 4);

console.log("After inserting:");
console.log(list);
list.print();
list.delete(1);




