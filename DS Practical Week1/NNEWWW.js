
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
      let current = this.tail;
      current.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeHead() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }
  rever() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }
  delete(value) {
    let current = this.head;
    let prev = null;
    while (current.value != value) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;

  }

  removeTail() {
    let current = this.head;
    let prev;
    while (current != this.tail) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;


  }
  removeOneAddTwo(val1,val2,target){
    let current=this.head;
    let prev=null;
    while(current.value!=target){
      prev=current;
      current=current.next;
    }
    let valu1=new Node(val1);
    let valu2=new Node(val2);
    valu1.next=valu2;
    valu2.next=current.next;
    prev.next=valu1;
    this.size++
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let ll = new list();
ll.addTail(111);
ll.addTail(222);
ll.addTail(333);
ll.addTail(444);
ll.addTail(555);
ll.addTail(666);
ll.addTail(777);
ll.addTail(888);

ll.removeHead();
ll.removeTail();
ll.delete(666);
ll.removeOneAddTwo(45,54,444);
ll.print();