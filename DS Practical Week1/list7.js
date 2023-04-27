//     insirting values
//   ====================

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


    addHead(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }


    addTail(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }



    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    Insert(key, value) {
        let node = new Node(value);
        let current = this.head;
        if (!current) {
            return;
        }
        while (current.next) {
            if (current.value == key) {
                node.next = current.next;
                current.next = node;
                this.size++;
            }
            current = current.next;
        }
    }
}
let ll = new list();
ll.addHead(444);
ll.addHead(333);
ll.addTail(666);
ll.addTail(777);
ll.Insert(333, 111);
ll.print();
console.log(ll);