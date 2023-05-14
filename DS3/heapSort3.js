function heapSort(array) {
    const heapSize = array.length;
  
    buildMaxHeap(array, heapSize);
    for (let i = heapSize - 1; i >= 1; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      maxHeapify(array, 0, i);
    }
    return array;
  }
  
  function buildMaxHeap(array, heapSize) {
    const lastParentIdx = Math.floor(heapSize / 2) - 1;
  
    for (let i = lastParentIdx; i >= 0; i--) {
      maxHeapify(array, i, heapSize);
    }
  }
  
  function maxHeapify(array, index, heapSize) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
  
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== index) {
      [array[index], array[largest]] = [array[largest], array[index]];
      maxHeapify(array, largest, heapSize);
    }
  }

  const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // [1, 3, 4, 5, 10]
