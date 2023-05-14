class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
    }
  
    siftUp(idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
  
      while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
        [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      }
    }
    display(){
        for(let i =0 ; i < this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
  }

  const heap = new MinHeap();
  heap.insert(1)
  heap.insert(2)
  heap.insert(3)
  heap.insert(4)
  heap.insert(5)
  heap.insert(7)
  heap.insert(6)


  heap.display()
