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
    addToHead(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    addToTail(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
let l = new list();
l.addToHead(5);
l.addToHead(7);
l.addToHead(9);
l.addToHead(11);
l.addToTail(3);
l.addToTail(2);
l.addToTail(1);
console.log(l);
l.print();
console.log(l);