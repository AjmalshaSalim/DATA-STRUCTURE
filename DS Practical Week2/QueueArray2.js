class QueueWithArray {
    constructor() {
        this.items = [];
    }
    add(items) {
        this.items.push(items);
    }

    delete() {
        return this.items.shift();
    }
    print() {
        console.log(this.items);
    }
}
let queue = new QueueWithArray();
queue.add(444);
queue.add(555);
queue.add(666);
queue.add(777);
queue.delete();
queue.print();