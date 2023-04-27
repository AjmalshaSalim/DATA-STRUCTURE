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
        let Data = this.head;
        while (Data) {
            console.log(Data.value);
            Data = Data.next;
        }
    }
    // insert(value,key) {
    //     let node = new Node(value);
    //     if(this.head===null){
    //         return;
    //     }
    //     let temp,Previous;
    //      temp=this.head;
    //     while (temp.value != key && temp != null) {
    //             Previous = temp;
    //             temp = temp.next;
    //         }
    //         Previous.next = node;
    //         node.next = temp;
    //         this.size++;
    // }
}
let linkedList = new list();
linkedList.addHead(574);
linkedList.addHead(630);
linkedList.addHead(720);
linkedList.addHead(997);
linkedList.addTail(419);
linkedList.addTail(288);
linkedList.addTail(111);
linkedList.print();
console.log(linkedList);
linkedList.insert(55,720);