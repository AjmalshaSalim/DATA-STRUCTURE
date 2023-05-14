class HeapSort {
    constructor(array) {
      this.array = array;
      this.heapSize = array.length;
    }
  
    heapSort() {
      this.buildMaxHeap();
      for (let i = this.array.length - 1; i >= 1; i--) {
        [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
        this.heapSize--;
        this.maxHeapify(0);
      }
      return this.array;
    }
  
    buildMaxHeap() {
      for (let i = Math.floor(this.array.length / 2) - 1; i >= 0; i--) {
        this.maxHeapify(i);
      }
    }
  
    maxHeapify(index) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let largest = index;
  
      if (left < this.heapSize && this.array[left] > this.array[largest]) {
        largest = left;
      }
  
      if (right < this.heapSize && this.array[right] > this.array[largest]) {
        largest = right;
      }
  
      if (largest !== index) {
        [this.array[index], this.array[largest]] = [this.array[largest], this.array[index]];
        this.maxHeapify(largest);
      }
    }
  }
  
  const array = [4, 10, 3, 5, 1];
  const heapSort = new HeapSort(array);
  console.log(heapSort.heapSort());
  