class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(idx) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let minIdx = idx;
      let length = this.heap.length;
  
      if (leftIdx < length && this.heap[leftIdx] < this.heap[minIdx]) {
        minIdx = leftIdx;
      }
  
      if (rightIdx < length && this.heap[rightIdx] < this.heap[minIdx]) {
        minIdx = rightIdx;
      }
  
      if (minIdx !== idx) {
        [this.heap[minIdx], this.heap[idx]] = [this.heap[idx], this.heap[minIdx]];
        this.shiftDown(minIdx);
      }
    }

    display(){
        for(let i =0 ; i < this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
  }

  const heap = new MinHeap();
  
  heap.buildHeap([2,5,3,1,4,7,6]);

  heap.display();
