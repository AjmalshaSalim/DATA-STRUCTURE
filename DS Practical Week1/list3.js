class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Head(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    Tail(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            current.next = node;
            this.tail = node;
        }
        this.size++; 
    }
    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
        let l = new list();
        l.Head(5);
        l.Head(4);
        l.Head(3);
        l.Head(2);
        l.Tail(6);
        l.Tail(7);
        l.Tail(8);
        l.Tail(9);
        console.log(l);
        l.print();